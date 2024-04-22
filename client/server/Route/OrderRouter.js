const express=require('express')
const { isAuthenticatedUser,isAuthenticatedUserForAddtocard} = require('../middleware/auth')
const {PlaceOrder,OrderList} = require("../Controller/order")
const router=express.Router()

// Creata  a  order //

router.post("/createOrder", isAuthenticatedUserForAddtocard , PlaceOrder)
router.get("/orderList" ,isAuthenticatedUserForAddtocard , OrderList)

module.exports=router