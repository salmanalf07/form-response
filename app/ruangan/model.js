const { Sequelize, DataTypes } = require("sequelize");
var db = require("../../database/database");

const Ruangan = db.define(
  "ruangans",
  {
    nama_ruangan: {
      type: DataTypes.STRING,
    },
    keterangan: {
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

module.exports = Ruangan;
