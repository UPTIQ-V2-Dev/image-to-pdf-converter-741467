import { statisticsController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { statisticsValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Get conversion statistics
router
    .route('/conversions')
    .get(
        auth('getConversions'),
        validate(statisticsValidation.getConversionStatistics),
        statisticsController.getConversionStatistics
    );

export default router;

/**
 * @swagger
 * tags:
 *   name: Statistics
 *   description: Conversion statistics and analytics
 */

/**
 * @swagger
 * /statistics/conversions:
 *   get:
 *     summary: Get conversion statistics
 *     description: Get user's conversion statistics including job counts, processing metrics, and file information.
 *     tags: [Statistics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [day, week, month, year, all-time]
 *         description: Time period for statistics (default is all-time)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalJobs:
 *                   type: integer
 *                   description: Total number of conversion jobs
 *                   example: 25
 *                 successJobs:
 *                   type: integer
 *                   description: Number of successful conversions
 *                   example: 23
 *                 failedJobs:
 *                   type: integer
 *                   description: Number of failed conversions
 *                   example: 2
 *                 totalFilesProcessed:
 *                   type: integer
 *                   description: Total number of images processed
 *                   example: 150
 *                 totalSizeMB:
 *                   type: number
 *                   format: float
 *                   description: Total size in MB of processed files
 *                   example: 125.8
 *                 averageProcessingTime:
 *                   type: integer
 *                   description: Average time to complete conversions in seconds
 *                   example: 15
 *                 lastJobDate:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   description: Date of the most recent conversion job
 *                   example: "2025-10-27T14:31:00Z"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
