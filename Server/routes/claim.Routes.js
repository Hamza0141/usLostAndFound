const express = require("express");
const claimController = require("../controllers/claim.Controller");

const router = express.Router();

router.patch("/api/claimitem/:id", claimController.updateItemById);
module.exports = router;
