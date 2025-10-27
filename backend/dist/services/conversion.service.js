import prisma from "../client.js";
import { getInstance } from "../storage/index.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
import { v4 as uuid } from 'uuid';
/**
 * Create a new conversion job
 * @param {number} userId - User ID
 * @param {ConversionSettings} settings - Conversion settings
 * @returns {Promise<ConversionJob>}
 */
const createConversionJob = async (userId, settings) => {
    const conversionJob = await prisma.conversionJob.create({
        data: {
            userId,
            settings: settings,
            status: 'idle'
        }
    });
    return conversionJob;
};
/**
 * Add images to a conversion job
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 * @param {ImageUpload[]} images - Array of image metadata
 * @returns {Promise<UploadUrl[]>}
 */
const addImagesToConversionJob = async (conversionId, userId, images) => {
    // Verify user owns the conversion job
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    if (conversionJob.status !== 'idle') {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Cannot add images to job that is not in idle state');
    }
    const storage = getInstance();
    const uploadUrls = [];
    for (const image of images) {
        // Validate image type
        if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(image.mimeType)) {
            throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, `Unsupported file type: ${image.mimeType}`);
        }
        // Validate file size (50MB limit)
        if (image.size > 50 * 1024 * 1024) {
            throw new ApiError(httpStatus.REQUEST_ENTITY_TOO_LARGE, 'File too large (max 50MB)');
        }
        const imageId = uuid();
        const fileName = `${imageId}_${image.name}`;
        const storageKey = `conversions/${conversionId}/${fileName}`;
        // Create conversion image record
        await prisma.conversionImage.create({
            data: {
                id: imageId,
                conversionJobId: conversionId,
                originalName: image.name,
                fileName,
                fileSize: image.size,
                mimeType: image.mimeType,
                width: image.width,
                height: image.height,
                storageUrl: storageKey
            }
        });
        // Generate upload URL
        const { url: uploadUrl } = await storage.generateUploadSignedUrl({
            key: storageKey,
            contentType: image.mimeType
        });
        uploadUrls.push({
            imageId,
            uploadUrl,
            fileName
        });
    }
    return uploadUrls;
};
/**
 * Start processing a conversion job
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 * @returns {Promise<{id: string, status: string, progress: ConversionProgress}>}
 */
const startConversionProcessing = async (conversionId, userId) => {
    // Verify user owns the conversion job
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId },
        include: { images: true }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    if (conversionJob.status === 'processing') {
        throw new ApiError(httpStatus.CONFLICT, 'Job already processing');
    }
    if (conversionJob.status !== 'idle') {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid conversion state for processing');
    }
    if (conversionJob.images.length === 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'No images uploaded for conversion');
    }
    // Update status to processing
    await prisma.conversionJob.update({
        where: { id: conversionId },
        data: { status: 'processing' }
    });
    // Start background processing (this would typically be done via a queue)
    void processConversionInBackground(conversionId);
    const progress = {
        current: 1,
        total: conversionJob.images.length + 2, // +2 for prepare and finalize stages
        stage: 'preparing',
        message: 'Preparing PDF document...'
    };
    return {
        id: conversionId,
        status: 'processing',
        progress
    };
};
/**
 * Background processing simulation (in production this would be a queue job)
 * @param {string} conversionId - Conversion job ID
 */
const processConversionInBackground = async (conversionId) => {
    try {
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 2000));
        const filename = `converted-images-${Date.now()}.pdf`;
        const fileSize = Math.floor(Math.random() * 5000000) + 1000000; // Random size between 1-6MB
        const downloadUrl = `https://storage.example.com/download/${conversionId}.pdf`;
        // Update job as completed
        await prisma.conversionJob.update({
            where: { id: conversionId },
            data: {
                status: 'complete',
                completedAt: new Date(),
                filename,
                fileSize,
                downloadUrl
            }
        });
        // Update user statistics
        await updateUserConversionHistory(conversionId);
    }
    catch (error) {
        // Mark as failed
        await prisma.conversionJob.update({
            where: { id: conversionId },
            data: {
                status: 'failed',
                completedAt: new Date(),
                error: error instanceof Error ? error.message : 'Processing failed'
            }
        });
        // Update user statistics
        await updateUserConversionHistory(conversionId, false);
    }
};
/**
 * Update user conversion history/statistics
 * @param {string} conversionId - Conversion job ID
 * @param {boolean} success - Whether the conversion was successful
 */
const updateUserConversionHistory = async (conversionId, success = true) => {
    const conversionJob = await prisma.conversionJob.findUnique({
        where: { id: conversionId }
    });
    if (!conversionJob)
        return;
    await prisma.conversionHistory.upsert({
        where: { userId: conversionJob.userId },
        update: {
            totalJobs: { increment: 1 },
            successJobs: success ? { increment: 1 } : undefined,
            failedJobs: success ? undefined : { increment: 1 },
            lastJobDate: new Date(),
            updatedAt: new Date()
        },
        create: {
            userId: conversionJob.userId,
            totalJobs: 1,
            successJobs: success ? 1 : 0,
            failedJobs: success ? 0 : 1,
            lastJobDate: new Date()
        }
    });
};
/**
 * Get conversion job by ID
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 * @returns {Promise<ConversionJob | null>}
 */
const getConversionJobById = async (conversionId, userId) => {
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId },
        include: { images: true }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    return conversionJob;
};
/**
 * Download converted PDF
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 * @returns {Promise<{stream: NodeJS.ReadableStream, filename: string, size: number}>}
 */
const downloadConvertedPDF = async (conversionId, userId) => {
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    if (conversionJob.status !== 'complete') {
        throw new ApiError(httpStatus.CONFLICT, 'Conversion not completed');
    }
    if (!conversionJob.downloadUrl || !conversionJob.filename) {
        throw new ApiError(httpStatus.NOT_FOUND, 'PDF file not found');
    }
    // In a real implementation, you would get the file from storage
    const storage = getInstance();
    const storageKey = `conversions/${conversionId}/${conversionJob.filename}`;
    try {
        const stream = await storage.createReadStream({ key: storageKey });
        const metadata = await storage.getFileMetadata({ key: storageKey });
        return {
            stream,
            filename: conversionJob.filename,
            size: metadata.size || conversionJob.fileSize || 0
        };
    }
    catch (error) {
        throw new ApiError(httpStatus.NOT_FOUND, 'PDF file not found in storage');
    }
};
/**
 * Delete conversion job and associated files
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 */
const deleteConversionJob = async (conversionId, userId) => {
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId },
        include: { images: true }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    const storage = getInstance();
    // Delete files from storage
    try {
        for (const image of conversionJob.images) {
            await storage.deleteFile({ key: image.storageUrl });
        }
        // Delete PDF if it exists
        if (conversionJob.filename) {
            const pdfKey = `conversions/${conversionId}/${conversionJob.filename}`;
            await storage.deleteFile({ key: pdfKey });
        }
    }
    catch (error) {
        // Log error but continue with database cleanup
        console.error('Error deleting files from storage:', error);
    }
    // Delete from database (cascade will handle images)
    await prisma.conversionJob.delete({
        where: { id: conversionId }
    });
};
/**
 * Query user's conversion jobs
 * @param {number} userId - User ID
 * @param {object} filter - Prisma filter
 * @param {object} options - Query options
 * @returns {Promise<{results: ConversionJob[], page: number, limit: number, totalPages: number, totalResults: number}>}
 */
const queryConversionJobs = async (userId, filter, options) => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy ?? 'createdAt';
    const sortType = options.sortType ?? 'desc';
    const where = {
        userId,
        ...filter
    };
    const [jobs, totalResults] = await Promise.all([
        prisma.conversionJob.findMany({
            where,
            select: {
                id: true,
                status: true,
                createdAt: true,
                completedAt: true,
                filename: true,
                fileSize: true,
                error: true
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { [sortBy]: sortType }
        }),
        prisma.conversionJob.count({ where })
    ]);
    const totalPages = Math.ceil(totalResults / limit);
    return {
        results: jobs,
        page,
        limit,
        totalPages,
        totalResults
    };
};
/**
 * Get conversion progress (for Server-Sent Events)
 * @param {string} conversionId - Conversion job ID
 * @param {number} userId - User ID
 * @returns {Promise<ConversionProgress>}
 */
const getConversionProgress = async (conversionId, userId) => {
    const conversionJob = await prisma.conversionJob.findFirst({
        where: { id: conversionId, userId },
        include: { images: true }
    });
    if (!conversionJob) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Conversion job not found');
    }
    // Return progress based on status
    switch (conversionJob.status) {
        case 'idle':
            return {
                current: 0,
                total: conversionJob.images.length + 2,
                stage: 'waiting',
                message: 'Waiting to start processing...'
            };
        case 'processing':
            return {
                current: Math.floor(Math.random() * conversionJob.images.length) + 1,
                total: conversionJob.images.length + 2,
                stage: 'processing',
                message: 'Processing images...'
            };
        case 'complete':
            return {
                current: conversionJob.images.length + 2,
                total: conversionJob.images.length + 2,
                stage: 'complete',
                message: 'PDF generation complete!'
            };
        case 'failed':
            return {
                current: 0,
                total: conversionJob.images.length + 2,
                stage: 'failed',
                message: conversionJob.error || 'Processing failed'
            };
        default:
            return {
                current: 0,
                total: conversionJob.images.length + 2,
                stage: 'unknown',
                message: 'Unknown status'
            };
    }
};
export default {
    createConversionJob,
    addImagesToConversionJob,
    startConversionProcessing,
    getConversionJobById,
    downloadConvertedPDF,
    deleteConversionJob,
    queryConversionJobs,
    getConversionProgress
};
