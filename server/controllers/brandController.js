const { Brand } = require("../models/model");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brandes = await Brand.create({ name });
    return res.json(brandes);
  }

  async getAll(req, res) {
    const brandes = await Brand.findAll();
    return res.json(brandes);
  }
}

module.exports = new BrandController();
