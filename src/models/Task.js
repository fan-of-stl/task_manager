const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");

const Task = sequelize.define("Task", {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
    allowNull: false,
    defaultValue: "Pending",
  },
});

User.hasMany(Task, { as: "tasks", foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = Task;
