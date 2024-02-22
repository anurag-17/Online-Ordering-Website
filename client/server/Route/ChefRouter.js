const express = require("express");
const router = express.Router();
const {
  createChef,
  getAllChefs,
  getChefById,
  deleteChefById,
  updateChefById,
} = require("../Controller/chef");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Create a new chef
router.route("/chefs").post(createChef);

// Get all chefs
router.route("/chefs").get(getAllChefs);

// Get a single chef by ID
router.route("/chefs/:id").get(getChefById);

// Update a chef by ID
router.route("/chefs/:id").put(updateChefById);

// Delete a chef by ID
router.route("/chefs/:id").delete(deleteChefById);

module.exports = router;
