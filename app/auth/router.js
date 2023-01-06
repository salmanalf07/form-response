var express = require("express");
var router = express.Router();
const { index, register, login, logout } = require("./controller");

/* GET home page. */

router.get("/", index);
router.get("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
