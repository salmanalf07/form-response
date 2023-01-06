var express = require("express");
var router = express.Router();
const { index } = require("./controller");
const { isLogin } = require("../../middleware/auth");

// router.use(isLogin);
router.get("/", index);
// router.get("/", table);
// router.post("/respondenDetail", respondenDetail);
// router.get("/event-quistionnaire", table1);

module.exports = router;
