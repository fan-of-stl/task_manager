const bcrypt = require("bcrypt");
const userService = require("./../services/userService");

const userController = {
  createUser: async (req, res) => {
    try {
      const userData = req.body;

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const hashedUserData = {
        ...userData,
        password: hashedPassword,
      };

      const user = await userService.createUser(hashedUserData);

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error in creating user!" });
    }
  },

  getUser: async (req, res) => {
    try {
      const userId = req.query.userId;

      const user = await userService.getUser(userId);

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error in fetching user!" });
    }
  },
};

module.exports = userController;
