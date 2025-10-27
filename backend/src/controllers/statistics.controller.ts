import { statisticsService } from '../services/index.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const getConversionStatistics = catchAsyncWithAuth(async (req, res) => {
    const { period = 'all-time' } = pick(req.validatedQuery, ['period']);
    const userId = req.user.id;

    const statistics = await statisticsService.getConversionStatistics(userId, period as any);
    res.status(httpStatus.OK).send(statistics);
});

export default {
    getConversionStatistics
};
