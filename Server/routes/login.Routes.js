// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
const logincontroller = require("../controllers/login.Controller")
router.post("/api/user/login", logincontroller.logIn);
module.exports = router;