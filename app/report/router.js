var express = require("express");
var router = express.Router();
const { isLogin } = require("../../middleware/auth");
const { index, report } = require("./controller");

/* GET home page. */
router.use(isLogin);
router.get("/", index);
router.post("/graph", report);

module.exports = router;
