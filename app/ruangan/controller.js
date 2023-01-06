var Ruangan = require("./model");
var flash = require("express-flash");
var session = require("express-session");

module.exports = {
  index: async (req, res) => {
    try {
      const ruanganall = await Ruangan.findAll({
        attributes: ["id", "nama_ruangan", "keterangan"],
      });
      res.render("ruangan", {
        page_title: "maintenance",
        page_name: "ruangan",
        ruangan: ruanganall,
        name: req.session.user.name,
      });
    } catch (error) {
      console.log(err);
    }
  },

  ruanganDetail: async (req, res) => {
    var id = req.body.id;

    try {
      const getId = await Ruangan.findByPk(id);
      res.json(getId);
    } catch (error) {
      console.log(error);
    }
  },

  ruanganCreate: async (req, res) => {
    const { nama_ruangan, keterangan } = req.body;
    try {
      await Ruangan.create({
        nama_ruangan: nama_ruangan,
        keterangan: keterangan,
      });
      res.json({ msg: "Data Berhasil Tersimpan" });
    } catch (error) {
      console.log(error);
    }
  },

  ruanganUpdate: async (req, res) => {
    const { id, nama_ruangan, keterangan } = req.body;
    try {
      await Ruangan.update(
        {
          nama_ruangan: nama_ruangan,
          keterangan: keterangan,
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

  ruanganDelete: async (req, res) => {
    var id = req.body.id;
    try {
      await Ruangan.destroy({
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
