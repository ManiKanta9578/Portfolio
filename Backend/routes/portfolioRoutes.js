const express = require('express');
const router = express.Router();
const {getPortfolioItems,createPortfolioItem} = require('../controllers/portfolioController');

router.get('/portfolio', getPortfolioItems);
router.post('/portfolio', createPortfolioItem);

module.exports = router;