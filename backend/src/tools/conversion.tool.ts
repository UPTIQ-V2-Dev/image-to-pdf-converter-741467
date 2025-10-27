import { conversionService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

// Common schemas for reuse
const conversionSettingsSchema = z.object({
    pageSize: z.enum(['a4', 'a3', 'letter', 'legal', 'custom']),
    orientation: z.enum(['portrait', 'landscape']),
    quality: z.enum(['low', 'medium', 'high']),
    margin: z.number().int().min(0).max(100),
    imagesPerPage: z.number().int().min(1).max(4),
    fitToPage: z.boolean(),
    maintainAspectRatio: z.boolean(),
    customWidth: z.number().int().min(100).max(5000).optional(),
    customHeight: z.number().int().min(100).max(5000).optional()
});

const conversionImageSchema = z.object({
    id: z.string(),
    originalName: z.string(),
    fileName: z.string(),
    fileSize: z.number(),
    mimeType: z.string(),
    width: z.number().nullable(),
    height: z.number().nullable()
});

const conversionJobSchema = z.object({
    id: z.string(),
    status: z.string(),
    settings: z.any(),
    createdAt: z.string(),
    completedAt: z.string().nullable(),
    filename: z.string().nullable(),
    fileSize: z.number().nullable(),
    downloadUrl: z.string().nullable(),
    error: z.string().nullable()
});

const createConversionTool: MCPTool = {
    id: 'conversion_create',
    name: 'Create Conversion Job',
    description: 'Create a new image-to-PDF conversion job with specified settings',
    inputSchema: z.object({
        userId: z.number().int(),
        settings: conversionSettingsSchema
    }),
    outputSchema: conversionJobSchema,
    fn: async (inputs: { userId: number; settings: any }) => {
        const result = await conversionService.createConversionJob(inputs.userId, inputs.settings);
        return {
            id: result.id,
            status: result.status,
            settings: result.settings,
            createdAt: result.createdAt.toISOString(),
            completedAt: result.completedAt?.toISOString() || null,
            filename: result.filename,
            fileSize: result.fileSize,
            downloadUrl: result.downloadUrl,
            error: result.error
        };
    }
};

const addImagesTool: MCPTool = {
    id: 'conversion_add_images',
    name: 'Add Images to Conversion',
    description: 'Add images to an existing conversion job',
    inputSchema: z.object({
        conversionId: z.string(),
        userId: z.number().int(),
        images: z
            .array(
                z.object({
                    name: z.string(),
                    size: z.number().int().min(1).max(52428800),
                    mimeType: z.enum(['image/jpeg', 'image/png', 'image/gif', 'image/webp']),
                    width: z.number().int().optional(),
                    height: z.number().int().optional()
                })
            )
            .min(1)
            .max(50)
    }),
    outputSchema: z.object({
        uploadUrls: z.array(
            z.object({
                imageId: z.string(),
                uploadUrl: z.string(),
                fileName: z.string()
            })
        )
    }),
    fn: async (inputs: { conversionId: string; userId: number; images: any[] }) => {
        const uploadUrls = await conversionService.addImagesToConversionJob(
            inputs.conversionId,
            inputs.userId,
            inputs.images
        );
        return { uploadUrls };
    }
};

const processConversionTool: MCPTool = {
    id: 'conversion_process',
    name: 'Process Conversion',
    description: 'Start processing a conversion job to generate PDF',
    inputSchema: z.object({
        conversionId: z.string(),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        id: z.string(),
        status: z.string(),
        progress: z.object({
            current: z.number(),
            total: z.number(),
            stage: z.string(),
            message: z.string()
        })
    }),
    fn: async (inputs: { conversionId: string; userId: number }) => {
        const result = await conversionService.startConversionProcessing(inputs.conversionId, inputs.userId);
        return result;
    }
};

const getConversionTool: MCPTool = {
    id: 'conversion_get_by_id',
    name: 'Get Conversion by ID',
    description: 'Get detailed information about a specific conversion job',
    inputSchema: z.object({
        conversionId: z.string(),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        id: z.string(),
        status: z.string(),
        images: z.array(conversionImageSchema),
        settings: z.any(),
        createdAt: z.string(),
        completedAt: z.string().nullable(),
        filename: z.string().nullable(),
        fileSize: z.number().nullable(),
        downloadUrl: z.string().nullable(),
        error: z.string().nullable()
    }),
    fn: async (inputs: { conversionId: string; userId: number }) => {
        const conversionJob = await conversionService.getConversionJobById(inputs.conversionId, inputs.userId);

        return {
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
            createdAt: conversionJob.createdAt.toISOString(),
            completedAt: conversionJob.completedAt?.toISOString() || null,
            filename: conversionJob.filename,
            fileSize: conversionJob.fileSize,
            downloadUrl: conversionJob.downloadUrl,
            error: conversionJob.error
        };
    }
};

const deleteConversionTool: MCPTool = {
    id: 'conversion_delete',
    name: 'Delete Conversion',
    description: 'Delete a conversion job and associated files',
    inputSchema: z.object({
        conversionId: z.string(),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        success: z.boolean()
    }),
    fn: async (inputs: { conversionId: string; userId: number }) => {
        await conversionService.deleteConversionJob(inputs.conversionId, inputs.userId);
        return { success: true };
    }
};

const getConversionsListTool: MCPTool = {
    id: 'conversion_list',
    name: 'List User Conversions',
    description: "Get a paginated list of user's conversion jobs with optional filtering",
    inputSchema: z.object({
        userId: z.number().int(),
        status: z.enum(['idle', 'processing', 'complete', 'failed']).optional(),
        sortBy: z.enum(['createdAt', 'completedAt', 'status', 'fileSize']).optional(),
        limit: z.number().int().min(1).max(100).optional(),
        page: z.number().int().min(1).optional()
    }),
    outputSchema: z.object({
        results: z.array(
            z.object({
                id: z.string(),
                status: z.string(),
                createdAt: z.string(),
                completedAt: z.string().nullable(),
                filename: z.string().nullable(),
                fileSize: z.number().nullable(),
                error: z.string().nullable()
            })
        ),
        page: z.number(),
        limit: z.number(),
        totalPages: z.number(),
        totalResults: z.number()
    }),
    fn: async (inputs: { userId: number; status?: string; sortBy?: string; limit?: number; page?: number }) => {
        const filter = inputs.status ? { status: inputs.status } : {};
        const options = {
            sortBy: inputs.sortBy,
            limit: inputs.limit,
            page: inputs.page
        };

        const result = await conversionService.queryConversionJobs(inputs.userId, filter, options);

        return {
            ...result,
            results: result.results.map(job => ({
                id: job.id,
                status: job.status,
                createdAt: job.createdAt.toISOString(),
                completedAt: job.completedAt?.toISOString() || null,
                filename: job.filename,
                fileSize: job.fileSize,
                error: job.error
            }))
        };
    }
};

const getConversionProgressTool: MCPTool = {
    id: 'conversion_get_progress',
    name: 'Get Conversion Progress',
    description: 'Get the current progress of a conversion job',
    inputSchema: z.object({
        conversionId: z.string(),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        current: z.number(),
        total: z.number(),
        stage: z.string(),
        message: z.string()
    }),
    fn: async (inputs: { conversionId: string; userId: number }) => {
        const progress = await conversionService.getConversionProgress(inputs.conversionId, inputs.userId);
        return progress;
    }
};

export const conversionTools: MCPTool[] = [
    createConversionTool,
    addImagesTool,
    processConversionTool,
    getConversionTool,
    deleteConversionTool,
    getConversionsListTool,
    getConversionProgressTool
];
