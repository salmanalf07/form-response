//import database
var connection = require("../../database/database");
var flash = require("express-flash");
var session = require("express-session");
const Respons = require("../quistionnaire/model");
const Questions = require("../quistionnaire_soal/model");
const sequelize = require("sequelize");

module.exports = {
  index: async (req, res) => {
    try {
      cart = {};

      for (let i = 1; i <= 6; i++) {
        const question = await Questions.findAll({
          where: {
            ques_code: "ques_" + [i],
          },
        });
        cart[i] = {
          ["quest"]:
            (await Respons.sum("ques_" + [i])) / (await Respons.count()),
          ["question"]: question[0].ques_detail,
        };
      }
      res.render("index", {
        title: "Dashboard",
        page_title: "",
        page_name: "Dashboard",
        name: req.session.user.name,
        // isAuthenticated: req.session.isAuthenticated,
        // name: req.session.account?.username,
        cart,
      });
      // res.json(Object.keys(cart).length);
    } catch (error) {
      console.log(error);
    }
  },
};
