var Responden = require("./model");
var flash = require("express-flash");
var session = require("express-session");

module.exports = {
  table: async (req, res) => {
    try {
      const getall = await Responden.findAll({
        attributes: ["id", "email", "name", "work_unit", "createdAt"],
      });
      res.render("table", {
        title: "Express JS",
        page_title: "layouts",
        page_name: "table",
        data: getall,
        name: req.session.user.name,
      });
    } catch (error) {
      console.log(error);
    }
  },
  respondenDetail: async (req, res) => {
    var id = req.body.id;

    try {
      const getId = await Responden.findByPk(id);
      res.json(getId);
    } catch (error) {
      console.log(error);
    }
  },

  table1: async (req, res) => {
    try {
      res.render("form", {
        page_title: "layouts",
        page_name: "table1",
      });
    } catch (error) {
      console.log(err);
    }
  },
};
