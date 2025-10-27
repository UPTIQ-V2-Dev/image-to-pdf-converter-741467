import Joi from 'joi';
const getConversionStatistics = {
    query: Joi.object().keys({
        period: Joi.string().valid('day', 'week', 'month', 'year', 'all-time').optional()
    })
};
export default {
    getConversionStatistics
};
