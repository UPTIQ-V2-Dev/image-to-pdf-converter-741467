import { statisticsService } from "../services/index.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
const getConversionStatistics = catchAsyncWithAuth(async (req, res) => {
    const { period = 'all-time' } = pick(req.validatedQuery, ['period']);
    const userId = req.user.id;
    const statistics = await statisticsService.getConversionStatistics(userId, period);
    res.status(httpStatus.OK).send(statistics);
});
export default {
    getConversionStatistics
};
