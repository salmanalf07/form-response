const { Sequelize, DataTypes } = require("sequelize");
var db = require("../../database/database");

const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = Users;
