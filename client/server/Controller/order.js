const Order = require("../Model/Order");
const MenuItem = require("../Model/MenuItem");
const User = require("../Model/User");

exports.addToCart = async (req, res, next) => {
    try {
        const { menuItem, quantity, customization } = req.body;
        
        // Access user ID from req.user
        const userId = req.user ? req.user._id : null;

        if (!userId) {
            // If user is not provided, store the cart data in local storage
            const cartData = {
                menuItem,
                quantity,
                customization
            };
            console.log(cartData.menuItem)
            // Store cart data in local storage
            // You can use localStorage.setItem() to store the data
            // For example: localStorage.setItem('cart', JSON.stringify(cartData));

            // Retrieve the menu item corresponding to cartData.menuItem
            const menuItems = await MenuItem.findOne({ _id: cartData.menuItem }).select("name price");

            // Make a empty cart object to store the cart data in array of local storage
            return res.status(200).json({ message: "Menu item added to cart", menuItem: menuItems, cartData});
        }

        // Find the user's existing cart or create a new one
        let userCart = await Order.findOne({ user: userId, status: "pending" });
        if (!userCart) {
            userCart = new Order({
                user: userId,
                items: [],
                status: "pending",
            });
        }

        // Add the Item to the cart
        userCart.items.push({ menuItem, quantity, customization });
        await userCart.save();

        // Populate the menuItem field with name and price
        const userCard = await Order.findById(userCart._id).populate({
            path: "items.menuItem",
            select: "name price"
        });

        res.status(201).json({ message: "Item added to cart", userCard });

    } catch (error) {
        next(error);
    }
}


exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const userCart = await Order.findOne({ user: userId, status: "pending" }).populate({
        path: "items.menuItem",
        select: "name price"
    })

    const TotalPricePerQuntity = userCart.items.map(item => item.menuItem.price * item.quantity).reduce((a, b) => a + b, 0);

    // want to count number of items in the cart
    const userCartCount =userCart.items.length;

    if (!userCart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    res.status(200).json({ cart: userCart, TotalPrice: TotalPricePerQuntity ,userCartCount: userCartCount});
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: "Failed to retrieve cart items", message: error.message });
  }
};



// Function to update an item in the user's cart
exports.updateCartItem = async (req, res) => {
  try {
    // Extract item details from the request body
    const { itemId, quantity, customization } = req.body;
    
    // Assuming user ID is extracted from the request, you may implement your own authentication logic
    const userId = req.user._id;

    // Find the user's cart
    const userCart = await Order.findOne({ user: userId, status: "pending" });

    if (!userCart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    // Find the index of the item in the cart
    // const itemIndex = userCart.items.findIndex(item => item._id.toString() === itemId);
    // console.log(itemIndex)

    const itemIndex = userCart.items.findIndex(item => String(item.menuItem) === itemId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Update the item details
    userCart.items[itemIndex].quantity = quantity;
    userCart.items[itemIndex].customization = customization;

    // Save the updated cart to the database
    await userCart.save();

    // Respond with a success message
    res.status(200).json({ message: "Item updated successfully", cart: userCart });
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: "Failed to update item in cart", message: error.message });
  }
};



exports.deleteCartItem = async (req, res) => {
  try {
    const itemId = req.params.id; // Assuming the parameter name is "itemId"

    // Extract user ID from the request (assuming it's stored in req.user)
    const userId = req.user._id;

    // Find the user's cart
    const userCart = await Order.findOne({ user: userId, status: "pending" });

    // If userCart is null, the cart is empty
    if (!userCart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    // Find the index of the item in the cart
    const itemIndex = userCart.items.findIndex(item => String(item.menuItem) === itemId);

    // If the item is not found in the cart, return 404
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Remove the item from the cart
    userCart.items.splice(itemIndex, 1);

    // Save the updated cart to the database
    await userCart.save();

    // Respond with a success message
    return res.status(200).json({ message: "Item deleted successfully", cart: userCart });
  } catch (error) {
    // If an error occurs, respond with an error message
    return res.status(500).json({ error: "Failed to delete item from cart", message: error.message });
  }
};



// Delete all items from the user's cart

exports.deleteAllCartItems = async (req, res) => {
    try {
        // Extract user ID from the request (assuming it's stored in req.user)
        const userId = req.user._id;

        // Find the user's cart
        const userCart = await Order.findOne({ user: userId, status: "pending" });

        // If userCart is null, the cart is empty
        if (!userCart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        // Remove all items from the cart
        userCart.items = [];

        // Save the updated cart to the database
        await userCart.save();

        // Respond with a success message
        return res.status(200).json({ message: "All items deleted from cart", cart: userCart });
    } catch (error) {
        // If an error occurs, respond with an error message
        return res.status(500).json({ error: "Failed to delete items from cart", message: error.message });
    }
}