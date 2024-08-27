// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
const foundController = require("../controllers/found.Controller")

router.post("/api/founditem", foundController.createFoundItem);
router.get("/api/founditem", foundController.getFoundItem);
router.get("/api/founditem/:id", foundController.getItemById);

module.exports =  router
