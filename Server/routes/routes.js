const express = require("express");
const router = express.Router();

const foundRouts = require("./found.Routes");
router.use(foundRouts);

const userRoutes = require("./user.Routes")
router.use(userRoutes);

const logInRouts= require("./login.Routes")
router.use(logInRouts);

const claimRoutes = require("./claim.Routes");
router.use(claimRoutes);

const lostItemRoutes = require("./lostItem.Routes");
router.use(lostItemRoutes);
module.exports = router;
