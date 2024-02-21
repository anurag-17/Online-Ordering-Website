const express = require("express")
const { addAdmin, adminLogin } = require("../Controller/Admin/AdminAuth")
const router = express.Router()

router.route("/addAdmin").post(addAdmin)
router.route("/adminLogin").post(adminLogin)

module.exports = router;