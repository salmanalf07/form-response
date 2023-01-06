//import database
var User = require("./model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");

      const alert = { message: alertMessage };

      if (req.session.user === null || req.session.user === undefined) {
        res.render("./auth/login", {
          title: "Express JS",
          page_title: "",
          page_name: "Login",
          alert,
        });
      } else {
        res.redirect("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  },

  register: async (req, res) => {
    try {
      res.render("./auth/register", {
        title: "Express JS",
        page_title: "",
        page_name: "Register",
      });
    } catch (error) {
      console.log(err);
    }
  },

  login: async (req, res) => {
    try {
      let { email, password } = req.body;
      const users = await User.findAll({
        where: {
          email: email,
        },
      });
      // console.log(users[0].password);
      if (users) {
        const checkPassword = await bcrypt.compare(password, users[0].password);
        if (checkPassword) {
          req.session.user = {
            id: users[0].id,
            email: users[0].email,
            name: users[0].name,
          };
          req.session.cookie.maxAge = new Date(Date.now() + 3600000);
          res.redirect("/dashboard");
        } else {
          req.flash("alertMessage", "password yang anda masukan salah");
          res.redirect("/");
        }
      } else {
        req.flash("alertMessage", "mohon maaf email atau password anda salah");
        res.redirect("/");
      }
    } catch (error) {
      req.flash("alertMessage", "email tidak terdaftar");
      res.redirect("/");
      console.log(error);
    }
  },

  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
