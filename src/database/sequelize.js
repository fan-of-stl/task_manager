const { Sequelize } = require("sequelize");
const sequelizeConfig = require("../config/sequelize.config");

const sequelize = new Sequelize(sequelizeConfig.development);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");

    sequelize
      .sync({ force: false })
      .then(() => {
        console.log("All models were synchronized succesfully");
      })
      .catch((error) => {
        console.error("Unable to syncronize models", error);
      });
  })
  .catch((err) => {
    console.error("Unable to connect to database", err);
  });

module.exports = sequelize;
