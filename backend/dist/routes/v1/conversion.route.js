import { conversionController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { conversionValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
// Conversion job routes
router
    .route('/')
    .post(auth('manageConversions'), validate(conversionValidation.createConversion), conversionController.createConversion)
    .get(auth('getConversions'), validate(conversionValidation.getConversions), conversionController.getConversions);
router
    .route('/:conversionId')
    .get(auth('getConversions'), validate(conversionValidation.getConversion), conversionController.getConversion)
    .delete(auth('manageConversions'), validate(conversionValidation.deleteConversion), conversionController.deleteConversion);
router
    .route('/:conversionId/images')
    .post(auth('manageConversions'), validate(conversionValidation.addImages), conversionController.addImages);
router
    .route('/:conversionId/process')
    .post(auth('manageConversions'), validate(conversionValidation.processConversion), conversionController.processConversion);
router
    .route('/:conversionId/download')
    .get(auth('getConversions'), validate(conversionValidation.downloadConversion), conversionController.downloadConversion);
router
    .route('/:conversionId/progress')
    .get(auth('getConversions'), validate(conversionValidation.getConversionProgress), conversionController.getConversionProgress);
export default router;
/**
 * @swagger
 * tags:
 *   name: Conversions
 *   description: Image to PDF conversion management
 */
/**
 * @swagger
 * /conversions:
 *   post:
 *     summary: Create a new image-to-PDF conversion job
 *     description: Create a new conversion job with specified settings.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - settings
 *             properties:
 *               settings:
 *                 type: object
 *                 required:
 *                   - pageSize
 *                   - orientation
 *                   - quality
 *                   - margin
 *                   - imagesPerPage
 *                   - fitToPage
 *                   - maintainAspectRatio
 *                 properties:
 *                   pageSize:
 *                     type: string
 *                     enum: [a4, a3, letter, legal, custom]
 *                   orientation:
 *                     type: string
 *                     enum: [portrait, landscape]
 *                   quality:
 *                     type: string
 *                     enum: [low, medium, high]
 *                   margin:
 *                     type: integer
 *                     minimum: 0
 *                     maximum: 100
 *                   imagesPerPage:
 *                     type: integer
 *                     minimum: 1
 *                     maximum: 4
 *                   fitToPage:
 *                     type: boolean
 *                   maintainAspectRatio:
 *                     type: boolean
 *                   customWidth:
 *                     type: integer
 *                     minimum: 100
 *                     maximum: 5000
 *                   customHeight:
 *                     type: integer
 *                     minimum: 100
 *                     maximum: 5000
 *             example:
 *               settings:
 *                 pageSize: "a4"
 *                 orientation: "portrait"
 *                 quality: "high"
 *                 margin: 20
 *                 imagesPerPage: 1
 *                 fitToPage: true
 *                 maintainAspectRatio: true
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 uploadUrls:
 *                   type: array
 *                   items:
 *                     type: object
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 *
 *   get:
 *     summary: Get user's conversion history
 *     description: Retrieve a paginated list of user's conversion jobs.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [idle, processing, complete, failed]
 *         description: Filter by conversion status
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [createdAt, completedAt, status, fileSize]
 *         description: Sort by field
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         default: 10
 *         description: Maximum number of results
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       status:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       completedAt:
 *                         type: string
 *                         format: date-time
 *                       filename:
 *                         type: string
 *                       fileSize:
 *                         type: integer
 *                       error:
 *                         type: string
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 totalResults:
 *                   type: integer
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */
/**
 * @swagger
 * /conversions/{conversionId}:
 *   get:
 *     summary: Get conversion job status and details
 *     description: Get detailed information about a specific conversion job.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 status:
 *                   type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       originalName:
 *                         type: string
 *                       fileName:
 *                         type: string
 *                       fileSize:
 *                         type: integer
 *                       mimeType:
 *                         type: string
 *                       width:
 *                         type: integer
 *                       height:
 *                         type: integer
 *                 settings:
 *                   type: object
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 completedAt:
 *                   type: string
 *                   format: date-time
 *                 filename:
 *                   type: string
 *                 fileSize:
 *                   type: integer
 *                 downloadUrl:
 *                   type: string
 *                 error:
 *                   type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a conversion job
 *     description: Delete a conversion job and associated files.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     responses:
 *       "204":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
/**
 * @swagger
 * /conversions/{conversionId}/images:
 *   post:
 *     summary: Upload images to a conversion job
 *     description: Add images to an existing conversion job.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - images
 *             properties:
 *               images:
 *                 type: array
 *                 minItems: 1
 *                 maxItems: 50
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - size
 *                     - mimeType
 *                   properties:
 *                     name:
 *                       type: string
 *                     size:
 *                       type: integer
 *                       minimum: 1
 *                       maximum: 52428800
 *                     mimeType:
 *                       type: string
 *                       enum: [image/jpeg, image/png, image/gif, image/webp]
 *                     width:
 *                       type: integer
 *                       minimum: 1
 *                     height:
 *                       type: integer
 *                       minimum: 1
 *             example:
 *               images:
 *                 - name: "photo1.jpg"
 *                   size: 1024000
 *                   mimeType: "image/jpeg"
 *                   width: 1920
 *                   height: 1080
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uploadUrls:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       imageId:
 *                         type: string
 *                       uploadUrl:
 *                         type: string
 *                       fileName:
 *                         type: string
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "413":
 *         $ref: '#/components/responses/PayloadTooLarge'
 *       "422":
 *         $ref: '#/components/responses/ValidationError'
 */
/**
 * @swagger
 * /conversions/{conversionId}/process:
 *   post:
 *     summary: Start processing the conversion job
 *     description: Start the image-to-PDF conversion process.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 status:
 *                   type: string
 *                 progress:
 *                   type: object
 *                   properties:
 *                     current:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     stage:
 *                       type: string
 *                     message:
 *                       type: string
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "409":
 *         $ref: '#/components/responses/Conflict'
 */
/**
 * @swagger
 * /conversions/{conversionId}/download:
 *   get:
 *     summary: Download the converted PDF file
 *     description: Download the generated PDF file.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     responses:
 *       "200":
 *         description: PDF file stream
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "409":
 *         $ref: '#/components/responses/Conflict'
 */
/**
 * @swagger
 * /conversions/{conversionId}/progress:
 *   get:
 *     summary: Get real-time conversion progress
 *     description: Get real-time progress updates via Server-Sent Events.
 *     tags: [Conversions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Conversion job ID
 *     responses:
 *       "200":
 *         description: Server-Sent Events stream with progress updates
 *         content:
 *           text/event-stream:
 *             schema:
 *               type: string
 *             example: |
 *               data: {"current":2,"total":4,"stage":"processing","message":"Processing images..."}
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
