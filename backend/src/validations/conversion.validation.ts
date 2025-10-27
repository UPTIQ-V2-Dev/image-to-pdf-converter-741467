import Joi from 'joi';

const createConversion = {
    body: Joi.object().keys({
        settings: Joi.object()
            .keys({
                pageSize: Joi.string().valid('a4', 'a3', 'letter', 'legal', 'custom').required(),
                orientation: Joi.string().valid('portrait', 'landscape').required(),
                quality: Joi.string().valid('low', 'medium', 'high').required(),
                margin: Joi.number().integer().min(0).max(100).required(),
                imagesPerPage: Joi.number().integer().min(1).max(4).required(),
                fitToPage: Joi.boolean().required(),
                maintainAspectRatio: Joi.boolean().required(),
                customWidth: Joi.number().integer().min(100).max(5000).when('pageSize', {
                    is: 'custom',
                    then: Joi.required(),
                    otherwise: Joi.optional()
                }),
                customHeight: Joi.number().integer().min(100).max(5000).when('pageSize', {
                    is: 'custom',
                    then: Joi.required(),
                    otherwise: Joi.optional()
                })
            })
            .required()
    })
};

const addImages = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    }),
    body: Joi.object().keys({
        images: Joi.array()
            .items(
                Joi.object().keys({
                    name: Joi.string().required(),
                    size: Joi.number().integer().min(1).max(52428800).required(), // 50MB max
                    mimeType: Joi.string().valid('image/jpeg', 'image/png', 'image/gif', 'image/webp').required(),
                    width: Joi.number().integer().min(1),
                    height: Joi.number().integer().min(1)
                })
            )
            .min(1)
            .max(50)
            .required() // Max 50 images per job
    })
};

const processConversion = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    })
};

const getConversion = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    })
};

const downloadConversion = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    })
};

const deleteConversion = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    })
};

const getConversions = {
    query: Joi.object().keys({
        status: Joi.string().valid('idle', 'processing', 'complete', 'failed'),
        sortBy: Joi.string().valid('createdAt', 'completedAt', 'status', 'fileSize'),
        limit: Joi.number().integer().min(1).max(100),
        page: Joi.number().integer().min(1)
    })
};

const getConversionProgress = {
    params: Joi.object().keys({
        conversionId: Joi.string().required()
    })
};

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
