import prisma from "../client.js";
/**
 * Get conversion statistics for a user
 * @param {number} userId - User ID to get statistics for
 * @param {TimePeriod} period - Time period filter
 * @returns {Promise<StatisticsResult>}
 */
const getConversionStatistics = async (userId, period = 'all-time') => {
    // Calculate date range based on period
    let startDate;
    const now = new Date();
    switch (period) {
        case 'day':
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            break;
        case 'week':
            startDate = new Date(now);
            startDate.setDate(now.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            break;
        case 'year':
            startDate = new Date(now.getFullYear(), 0, 1);
            break;
        case 'all-time':
        default:
            startDate = undefined;
            break;
    }
    // Build where clause for date filtering
    const whereClause = {
        userId,
        ...(startDate && { createdAt: { gte: startDate } })
    };
    // Get all jobs for the user in the specified period
    const jobs = await prisma.conversionJob.findMany({
        where: whereClause,
        include: {
            images: true
        }
    });
    // Calculate statistics
    const totalJobs = jobs.length;
    const successJobs = jobs.filter(job => job.status === 'complete').length;
    const failedJobs = jobs.filter(job => job.status === 'failed' || job.status === 'error').length;
    // Calculate total files processed
    const totalFilesProcessed = jobs.reduce((total, job) => total + job.images.length, 0);
    // Calculate total size in MB
    const totalSizeBytes = jobs.reduce((total, job) => {
        const jobSizeBytes = job.images.reduce((jobTotal, image) => jobTotal + image.fileSize, 0);
        return total + jobSizeBytes;
    }, 0);
    const totalSizeMB = Math.round((totalSizeBytes / (1024 * 1024)) * 100) / 100; // Round to 2 decimal places
    // Calculate average processing time (in seconds)
    const completedJobs = jobs.filter(job => job.status === 'complete' && job.completedAt && job.createdAt);
    let averageProcessingTime = 0;
    if (completedJobs.length > 0) {
        const totalProcessingTime = completedJobs.reduce((total, job) => {
            const processingTime = job.completedAt.getTime() - job.createdAt.getTime();
            return total + processingTime;
        }, 0);
        averageProcessingTime = Math.round(totalProcessingTime / completedJobs.length / 1000); // Convert to seconds
    }
    // Get last job date
    const lastJob = jobs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
    const lastJobDate = lastJob ? lastJob.createdAt.toISOString() : null;
    return {
        totalJobs,
        successJobs,
        failedJobs,
        totalFilesProcessed,
        totalSizeMB,
        averageProcessingTime,
        lastJobDate
    };
};
export default {
    getConversionStatistics
};
