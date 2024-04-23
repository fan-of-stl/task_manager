const User = require("../models/User");

const userService = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  },

  getUser: async (userId) => {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error("Error in fetching user");
    }
  },

  updateUser: async (userData) => {
    try {
      const updatedUser = User.update(userData);
      return updatedUser;
    } catch (error) {
      throw new Error("Error in updating user data.");
    }
  },
};

module.exports = userService;
