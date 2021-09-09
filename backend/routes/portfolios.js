const express = require('express');
const router = express.Router();
const { getPortfolios } = require('../controllers/portfolios');

// GET ENDPOINT /api/v1/portfolios -> [1,2,3]

router.get('/portfolios', getPortfolios)


module.exports = router;