var Ruangan = require("../ruangan/model");
var Respons = require("./model");

var flash = require("express-flash");
var session = require("express-session");
const Responden = require("../responden/model");

module.exports = {
  index: async (req, res) => {
    try {
      const ruanganall = await Ruangan.findAll({
        attributes: ["id", "nama_ruangan"],
      });
      const ResponsAll = await Respons.findByPk(11, {
        include: [Responden, Ruangan],
      });
      // res.json(ResponsAll);
      res.render("form_ques/form", {
        page_title: "layouts",
        page_name: "table1",
        but_send: "true",
        name: "",
        work_unit: "",
        email: "",
        nama_kegiatan: "",
        date_kegiatan: "",
        ruanganId: "",
        ques_1: "",
        ques_2: "",
        ques_3: "",
        ques_4: "",
        ques_5: "",
        ques_6: "",
        ques_7: "",
        ruangan: ruanganall,
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

  quistCreate: async (req, res) => {
    const {
      name,
      work_unit,
      email,
      nama_kegiatan,
      date_kegiatan,
      ruanganId,
      ques_1,
      ques_2,
      ques_3,
      ques_4,
      ques_5,
      ques_6,
      ques_7,
    } = req.body;
    try {
      await Respons.create(
        {
          responden: [
            {
              email: email,
              name: name,
              work_unit: work_unit,
            },
          ],
          nama_kegiatan: nama_kegiatan,
          date_kegiatan: date_kegiatan,
          ruanganId: ruanganId,
          ques_1: ques_1,
          ques_2: ques_2,
          ques_3: ques_3,
          ques_4: ques_4,
          ques_5: ques_5,
          ques_6: ques_6,
          ques_7: ques_7,
        },
        {
          include: [Responden],
        }
      );
      res.json({ msg: "Data Berhasil Tersimpan" });
    } catch (error) {
      console.log(error);
    }
  },

  detailQues: async (req, res) => {
    let id = req.params.id;
    try {
      const ruanganall = await Ruangan.findAll({
        attributes: ["id", "nama_ruangan"],
      });
      const ResponsAll = await Respons.findByPk(id, {
        include: [Responden, Ruangan],
      });
      // res.json(ResponsAll);
      res.render("form_ques/form", {
        page_title: "layouts",
        page_name: "table1",
        ruangan: ruanganall,
        but_send: "false",
        name: ResponsAll.responden.name,
        work_unit: ResponsAll.responden.work_unit,
        email: ResponsAll.responden.email,
        nama_kegiatan: ResponsAll.nama_kegiatan,
        date_kegiatan: ResponsAll.date_kegiatan,
        ruanganId: ResponsAll.ruangan.id,
        ques_1: ResponsAll.ques_1,
        ques_2: ResponsAll.ques_2,
        ques_3: ResponsAll.ques_3,
        ques_4: ResponsAll.ques_4,
        ques_5: ResponsAll.ques_5,
        ques_6: ResponsAll.ques_6,
        ques_7: ResponsAll.ques_7,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
