const express = require("express");
const userRoutes = require("./userRoutes");
const taskRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const router = express.Router();

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/authenticate", authRoutes);

module.exports = router;
