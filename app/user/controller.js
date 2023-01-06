var User = require("../auth/model");
var flash = require("express-flash");
var bcrypt = require("bcrypt");
var session = require("express-session");

module.exports = {
  table: async (req, res) => {
    try {
      const getall = await User.findAll();
      res.render("user", {
        title: "Express JS",
        page_title: "maintenance",
        page_name: "user",
        data: getall,
        name: req.session.user.name,
      });
    } catch (error) {
      console.log(error);
    }
  },
  userDetail: async (req, res) => {
    var id = req.body.id;

    try {
      const getId = await User.findByPk(id);
      res.json(getId);
    } catch (error) {
      console.log(error);
    }
  },

  userCreate: async (req, res) => {
    const { nameUser, emailUser, password } = req.body;
    // if (password !== confPassword)
    //   return res
    //     .status(400)
    //     .json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await User.create({
        name: nameUser,
        email: emailUser,
        password: hashPassword,
      });
      res.json({ msg: "Data Berhasil Tersimpan" });
    } catch (error) {
      console.log(error);
    }
  },

  userDelete: async (req, res) => {
    var id = req.body.id;
    try {
      await User.destroy({
        where: {
          id: id,
        },
      });
      res.json({ msg: "Data Berhasil Terhapus" });
    } catch (error) {
      console.log(error);
    }
  },

  userUpdate: async (req, res) => {
    const { id, nameUser, emailUser, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await User.update(
        {
          name: nameUser,
          email: emailUser,
          password: hashPassword,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ msg: "Data Berhasil Tersimpan" });
    } catch (error) {
      console.log(error);
    }
  },
};
