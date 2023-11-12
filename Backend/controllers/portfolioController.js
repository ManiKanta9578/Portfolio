const PortfolioItem = require("../models/PortfolioItem");

const getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await PortfolioItem.find();
    res.json(portfolioItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPortfolioItem = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newPortfolioItem = new PortfolioItem({ title, description });
    await newPortfolioItem.save();
    res.status(201).json(newPortfolioItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getPortfolioItems, createPortfolioItem };
