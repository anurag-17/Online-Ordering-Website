const Category = require("../Model/Category");
const validateMongoDbId = require("../Utils/validateMongodbId");

// Create a new category
exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

// Get all categories with pagination and search filter
exports.getAllCategories = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let categoryQuery = Category.find();

    if (search) {
      categoryQuery = categoryQuery.where('title').regex(new RegExp(search, 'i'));
    }

    const totalItems = await Category.countDocuments(categoryQuery);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const categories = await categoryQuery.skip(skip).limit(itemsPerPage);

    res.json({
      totalItems,
      totalPages,
      currentPage,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

// Update a category by ID
exports.updateCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

// Delete a category by ID
exports.deleteCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};
