const MenuItem = require('../Model/MenuItem');

// Create a new menu item
exports.createMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    next(error);
  }
};


// Get all menu items 
exports.getAllMenuItems = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let menuItemQuery = MenuItem.find().populate("chef").populate("category");

    if (search) {
      menuItemQuery = menuItemQuery.or([
        { name: { $regex: new RegExp(search, 'i') } },
        { category: { $regex: new RegExp(search, 'i') } },
        { description: { $regex: new RegExp(search, 'i') } },
      ]);
    }

    const totalItems = await MenuItem.countDocuments(menuItemQuery);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const menuItems = await menuItemQuery.skip(skip).limit(itemsPerPage);

    res.json({
      totalItems,
      totalPages,
      currentPage,
      menuItems
    });
  } catch (error) {
    next(error);
  }
};

// Get a single menu item by ID
exports.getMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findById(id).populate("chef").populate("category");
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Update a menu item by ID
exports.updateMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Delete a menu item by ID
exports.deleteMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findByIdAndDelete(id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    next(error);
  }
};