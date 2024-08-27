const express = require("express");
const lostItemController = require("../controllers/lostItem.Controller");

const router = express.Router();

router.post("/api/reportlostitem", lostItemController.createLostItem);
router.get("/api/lostitem", lostItemController.getLostItems);
router.get("/api/lostitem/:id", lostItemController.getItemById);
router.patch("/api/lostitem/:id", lostItemController.getItemById);
module.exports = router;
