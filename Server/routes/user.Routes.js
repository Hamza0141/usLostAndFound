// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
const UserController = require("../controllers/user.Controller");

router.post("/api/user/adduser", UserController.createUser);
module.exports = router;
