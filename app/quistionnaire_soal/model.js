const { Sequelize, DataTypes } = require("sequelize");
var db = require("../../database/database");

const Questions = db.define(
  "question",
  {
    ques_code: {
      type: DataTypes.STRING,
    },
    ques_detail: {
      type: DataTypes.TEXT("long"),
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

module.exports = Questions;
