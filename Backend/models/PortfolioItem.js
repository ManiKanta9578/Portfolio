const mongoose = require('mongoose')

const portfolioItemSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
});

const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);

module.exports = PortfolioItem;