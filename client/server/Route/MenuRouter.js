const express = require("express");
const router = express.Router();
const {
    createMenuItem,
    getAllMenuItems,
    getMenuItemById,
    updateMenuItemById,
    deleteMenuItemById,
    upload
} = require("../Controller/menu");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Create a new menu item
router.post("/menuItems",  upload, createMenuItem);

// Get all menu item
router.route("/menuItems").get(getAllMenuItems);

// Get a single menu item by ID
router.route("/menuItems/:id").get(getMenuItemById);

// Update a menu item by ID
router.route("/menuItems/:id").put(updateMenuItemById);

// Delete a menu item by ID
router.route("/menuItems/:id").delete(deleteMenuItemById);

module.exports = router;
