const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/', auth, controller.getAllHistoriesController);
router.get('/leads/:id', auth, controller.getHistoriesByLeadIdController);

module.exports = router;
