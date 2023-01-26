var flash = require("express-flash");
var session = require("express-session");
var Ruangan = require("../ruangan/model");
var Respons = require("../quistionnaire/model");
const Responden = require("../responden/model");
var Questions = require("../quistionnaire_soal/model");
const { Op, where } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    try {
      const ruanganall = await Ruangan.findAll({
        attributes: ["id", "nama_ruangan"],
      });
      res.render("report", {
        title: "Report Quistionnaire",
        page_title: "layouts",
        page_name: "report",
        ruangan: ruanganall,
        name: req.session.user.name,
      });
    } catch (error) {
      console.log(error);
    }
  },

  report: async (req, res) => {
    try {
      const { date_start, date_end } = req.body;
      const responsAll = await Respons.findAll({
        where: {
          date_kegiatan: {
            [Op.between]: [date_start, date_end],
          },
        },
        include: [Responden, Ruangan],
      });
      const questionAll = await Questions.findAll({
        attributes: ["id", "ques_code", "ques_detail"],
      });
      res.render("graph", {
        data: responsAll,
        soal: questionAll,
      });
    } catch (error) {
      console.log(error);
    }
  },

  succes: async (req, res) => {
    try {
      res.render("form_ques/succes");
    } catch (error) {
      console.log(error);
    }
  },
};
