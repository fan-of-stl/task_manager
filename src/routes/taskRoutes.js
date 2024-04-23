const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/task/:userId", taskController.createTask);
router.get("/task", taskController.getTask);

module.exports = router;
