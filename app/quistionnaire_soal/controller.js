var Questions = require("./model");
var flash = require("express-flash");
var session = require("express-session");

module.exports = {
  index: async (req, res) => {
    try {
      const questionAll = await Questions.findAll({
        attributes: ["id", "ques_code", "ques_detail"],
      });
      res.render("question", {
        page_title: "layouts",
        page_name: "question",
        data: questionAll,
        name: req.session.user.name,
      });
    } catch (error) {
      console.log(err);
    }
  },

  questionDetail: async (req, res) => {
    var id = req.body.id;

    try {
      const getId = await Questions.findByPk(id);
      res.json(getId);
    } catch (error) {
      console.log(error);
    }
  },

  questionCreate: async (req, res) => {
    const { ques_code, ques_detail } = req.body;
    try {
      await Questions.create({
        ques_code: ques_code,
        ques_detail: ques_detail,
      });
      res.json({ msg: "Data Berhasil Tersimpan" });
    } catch (error) {
      console.log(error);
    }
  },

  questionUpdate: async (req, res) => {
    const { id, ques_code, ques_detail } = req.body;
    try {
      await Questions.update(
        {
          ques_code: ques_code,
          ques_detail: ques_detail,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ msg: "Data Berhasil Terbaharui" });
    } catch (error) {
      console.log(error);
    }
  },

  questionDelete: async (req, res) => {
    var id = req.body.id;
    try {
      await Questions.destroy({
        where: {
          id: id,
        },
      });
      res.json({ msg: "Data Berhasil Terhapus" });
    } catch (error) {
      console.log(error);
    }
  },
};
