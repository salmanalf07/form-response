const { Sequelize, DataTypes } = require("sequelize");
var db = require("../../database/database");

const Responden = db.define(
  "respondens",
  {
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    work_unit: {
      type: DataTypes.STRING,
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

module.exports = Responden;
