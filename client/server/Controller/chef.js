const Chef = require("../Model/Chef");
const validateMongoDbId = require("../Utils/validateMongodbId");

// Create a new chef
exports.createChef = async (req, res, next) => {
  try {
    const chef = await Chef.create(req.body);
    res.status(201).json(chef);
  } catch (error) {
    next(error);
  }
};

// Get all chefs
exports.getAllChefs = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let chefQuery = Chef.find();

    if (search) {
      chefQuery = chefQuery.or([
        { name: { $regex: new RegExp(search, "i") } },
        { specialty: { $regex: new RegExp(search, "i") } },
      ]);
    }

    const totalItems = await Chef.countDocuments(chefQuery);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const chefs = await chefQuery.skip(skip).limit(itemsPerPage);

    res.json({
      totalItems,
      totalPages,
      currentPage,
      chefs,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single chef by ID
exports.getChefById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const chef = await Chef.findById(id);
    if (!chef) {
      return res.status(404).json({ error: "Chef not found" });
    }
    res.json(chef);
  } catch (error) {
    next(error);
  }
};

// Update a chef by ID
exports.updateChefById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const chef = await Chef.findByIdAndUpdate(id, req.body, { new: true });
    if (!chef) {
      return res.status(404).json({ error: "Chef not found" });
    }
    res.json(chef);
  } catch (error) {
    next(error);
  }
};

// Delete a chef by ID
exports.deleteChefById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const chef = await Chef.findByIdAndDelete(id);
    if (!chef) {
      return res.status(404).json({ error: "Chef not found" });
    }
    res.json({ message: "Chef deleted successfully" });
  } catch (error) {
    next(error);
  }
};