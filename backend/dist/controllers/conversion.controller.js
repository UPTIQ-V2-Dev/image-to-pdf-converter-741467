import { conversionService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
const createConversion = catchAsyncWithAuth(async (req, res) => {
    const { settings } = req.body;
    const userId = req.user.id;
    const conversionJob = await conversionService.createConversionJob(userId, settings);
    res.status(httpStatus.CREATED).send({
        id: conversionJob.id,
        status: conversionJob.status,
        createdAt: conversionJob.createdAt,
        uploadUrls: [] // Initially empty, images will be added later
    });
});
const addImages = catchAsyncWithAuth(async (req, res) => {
    const { conversionId } = req.params;
    const { images } = req.body;
    const userId = req.user.id;
    const uploadUrls = await conversionService.addImagesToConversionJob(conversionId, userId, images);
    res.send({ uploadUrls });
});
const processConversion = catchAsyncWithAuth(async (req, res) => {
    const { conversionId } = req.params;
    const userId = req.user.id;
    const result = await conversionService.startConversionProcessing(conversionId, userId);
    res.send(result);
});
const getConversion = catchAsyncWithAuth(async (req, res) => {
    const { conversionId } = req.params;
    const userId = req.user.id;
    const conversionJob = await conversionService.getConversionJobById(conversionId, userId);
    // Format response to match API specification
    const response = {
        id: conversionJob.id,
        status: conversionJob.status,
        images: conversionJob.images.map(image => ({
            id: image.id,
            originalName: image.originalName,
            fileName: image.fileName,
            fileSize: image.fileSize,
            mimeType: image.mimeType,
            width: image.width,
            height: image.height
        })),
        settings: conversionJob.settings,
        createdAt: conversionJob.createdAt,
        completedAt: conversionJob.completedAt,
        filename: conversionJob.filename,
        fileSize: conversionJob.fileSize,
        downloadUrl: conversionJob.downloadUrl,
        error: conversionJob.error
    };
    res.send(response);
});
const downloadConversion = catchAsyncWithAuth(async (req, res) => {
    const { conversionId } = req.params;
    const userId = req.user.id;
    const { stream, filename, size } = await conversionService.downloadConvertedPDF(conversionId, userId);
    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', size.toString());
    // Pipe the stream to response
    stream.pipe(res);
});
const deleteConversion = catchAsyncWithAuth(async (req, res) => {
    const { conversionId } = req.params;
    const userId = req.user.id;
    await conversionService.deleteConversionJob(conversionId, userId);
    res.status(httpStatus.NO_CONTENT).send();
});
const getConversions = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['status']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    const userId = req.user.id;
    const result = await conversionService.queryConversionJobs(userId, filter, options);
    res.send(result);
});
const getConversionProgress = catchAsyncWithAuth((req, res) => {
    const { conversionId } = req.params;
    const userId = req.user.id;
    // Set headers for Server-Sent Events
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sendProgress = () => {
        conversionService
            .getConversionProgress(conversionId, userId)
            .then(progress => {
            res.write(`data: ${JSON.stringify(progress)}\n\n`);
            // If conversion is complete or failed, close the connection
            if (progress.stage === 'complete' || progress.stage === 'failed') {
                res.end();
                return;
            }
            // Continue sending updates every 2 seconds
            setTimeout(sendProgress, 2000);
        })
            .catch(error => {
            // Send error and close connection
            const errorMessage = error instanceof ApiError ? error.message : 'Internal server error';
            res.write(`data: ${JSON.stringify({ error: errorMessage })}\n\n`);
            res.end();
        });
    };
    // Start sending progress updates
    sendProgress();
    // Handle client disconnect
    req.on('close', () => {
        res.end();
    });
});
export default {
    createConversion,
    addImages,
    processConversion,
    getConversion,
    downloadConversion,
    deleteConversion,
    getConversions,
    getConversionProgress
};
