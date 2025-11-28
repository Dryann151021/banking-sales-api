const asyncHandler = require('../../utils/asyncHandler');
const { leadHistoriesService } = require('../../services/postgre');

/**
 * @api {get} /history/leads/:id Ambil history by lead id
 * @apiName GetHistoryByLeadId
 * @apiGroup History
 *
 * @apiParam {String} leadId
 *
 * @apiSuccess (200) {Object[]} histories
 */

const getHistoriesByLeadIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const histories = await leadHistoriesService.getHistoriesByLeadId(id);

  res.status(200).json({
    status: 'success',
    data: {
      histories,
    },
  });
});

/**
 * @api {get} /history Ambil semua history
 * @apiName GetAllHistory
 * @apiGroup History
 *
 * @apiSuccess (200) {Object[]} histories
 */

const getAllHistoriesController = asyncHandler(async (req, res) => {
  const histories = await leadHistoriesService.getAllHistories();

  res.status(200).json({
    status: 'success',
    data: {
      histories,
    },
  });
});

module.exports = {
  getHistoriesByLeadIdController,
  getAllHistoriesController,
};
