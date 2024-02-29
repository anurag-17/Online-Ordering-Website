const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
} = require("../Controller/category");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Create a new category
router.route("/categories").post(createCategory);

// Get all categories
router.route("/categories").get(getAllCategories);

// Get a single category by ID
router.route("/categories/:id").get(getCategoryById);

// Update a category by ID
router.route("/categories/:id").put(updateCategoryById);

// Delete a category by ID
router.route("/categories/:id").delete(deleteCategoryById);

module.exports = router;
