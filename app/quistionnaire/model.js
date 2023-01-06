const { Sequelize, DataTypes } = require("sequelize");
var db = require("../../database/database");
var Responden = require("../responden/model");
const Ruangan = require("../ruangan/model");

const Respons = db.define(
  "respons",
  {
    start_time: {
      type: DataTypes.DATE,
    },
    End_time: {
      type: DataTypes.DATE,
    },
    respondenId: {
      type: DataTypes.INTEGER,
    },
    nama_kegiatan: {
      type: DataTypes.STRING,
    },
    date_kegiatan: {
      type: DataTypes.DATEONLY,
    },
    ruanganId: {
      type: DataTypes.INTEGER,
    },
    ques_1: {
      type: DataTypes.STRING,
    },
    ques_2: {
      type: DataTypes.STRING,
    },
    ques_3: {
      type: DataTypes.STRING,
    },
    ques_4: {
      type: DataTypes.STRING,
    },
    ques_5: {
      type: DataTypes.STRING,
    },
    ques_6: {
      type: DataTypes.STRING,
    },
    ques_7: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
  }
);

Respons.belongsTo(Responden, {
  foreignKey: "respondenId",
});
Respons.belongsTo(Ruangan, {
  foreignKey: "ruanganId",
});

(async () => {
  await db.sync();
})();

module.exports = Respons;
