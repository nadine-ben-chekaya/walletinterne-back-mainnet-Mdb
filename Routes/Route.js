const express = require("express");
const router = express.Router();
const accountRoutes = require("./account.js");

router.use(accountRoutes);
module.exports = router;
