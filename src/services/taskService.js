const Task = require("../models/task");

const taskService = {
  createTask: async (taskData) => {
    try {
      const task = await Task.createTask(taskData);
      return task;
    } catch (error) {
      throw new Error("Error in creating task");
    }
  },

  getTaskById: async (taskId) => {
    try {
      const task = await Task.findByPk(taskId);
      return task;
    } catch (error) {
      throw new Error("Error in fetching task!");
    }
  },

  getAllTask: async (userId) => {
    try {
    } catch (error) {}
  },
};

module.exports = taskService;
