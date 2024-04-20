const express=require('express')
const { isAuthenticatedUser, authorizeRoles ,isAuthenticatedUserForAddtocard} = require('../middleware/auth')
const { addToCart, getCartItems, updateCartItem , deleteCartItem} = require("../Controller/order")
const router=express.Router()

// Route to create a new order

router.post('/AddtoCart', isAuthenticatedUserForAddtocard ,addToCart)
router.get('/getCartItems', isAuthenticatedUserForAddtocard, getCartItems)
router.put('/updateCartItem/:id', isAuthenticatedUserForAddtocard, updateCartItem)
router.delete('/deleteCartItem/:id', isAuthenticatedUserForAddtocard, deleteCartItem)


module.exports = router