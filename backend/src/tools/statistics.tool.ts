import { statisticsService } from '../services/index.ts';
import { MCPTool } from '../types/mcp.ts';
import { z } from 'zod';

const statisticsSchema = z.object({
    totalJobs: z.number(),
    successJobs: z.number(),
    failedJobs: z.number(),
    totalFilesProcessed: z.number(),
    totalSizeMB: z.number(),
    averageProcessingTime: z.number(),
    lastJobDate: z.string().nullable()
});

const getConversionStatisticsTool: MCPTool = {
    id: 'statistics_get_conversions',
    name: 'Get Conversion Statistics',
    description: 'Get conversion statistics for a user including job counts, processing metrics, and file information',
    inputSchema: z.object({
        userId: z.number().int(),
        period: z.enum(['day', 'week', 'month', 'year', 'all-time']).optional().default('all-time')
    }),
    outputSchema: statisticsSchema,
    fn: async (inputs: { userId: number; period?: 'day' | 'week' | 'month' | 'year' | 'all-time' }) => {
        const statistics = await statisticsService.getConversionStatistics(inputs.userId, inputs.period || 'all-time');
        return statistics;
    }
};

export const statisticsTools: MCPTool[] = [getConversionStatisticsTool];
