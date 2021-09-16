const express = require('express');
const router = express.Router();
const { getPortfolios, getPortfolioById } = require('../controllers/portfolios');

// GET ENDPOINT /api/v1/portfolios -> [1,2,3]

router.get('', getPortfolios)
router.get('/:id', getPortfolioById)

module.exports = router;