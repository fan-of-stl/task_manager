const taskService = require("../services/taskService");

const taskController = {
  createTask: async (req, res) => {
    try {
      const { userId } = req.params;
      const taskData = req.body;

      taskData.userId = userId;

      const task = await taskService.createTask(taskData);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error in creating user!" });
    }
  },

  getTask: async (req, res) => {
    try {
      const taskId = req.query.userId;

      const task = await taskService.getTask(taskId);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error in fetching user!" });
    }
  },
};

module.exports = taskController;
