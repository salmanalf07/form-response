var express = require("express");
var router = express.Router();
const { index, table, respondenDetail, table1 } = require("./controller");
const { isLogin } = require("../../middleware/auth");

router.use(isLogin);
router.get("/", table);
router.post("/respondenDetail", respondenDetail);
router.get("/event-quistionnaire", table1);

module.exports = router;
