var express = require("express");
const { isLogin } = require("../../middleware/auth");
var router = express.Router();
const {
  index,
  questionDetail,
  questionCreate,
  questionUpdate,
  questionDelete,
} = require("./controller");

/* GET home page. */
router.use(isLogin);
router.get("/", index);
router.post("/create", questionCreate);
router.post("/update", questionUpdate);
router.post("/detailQuestion", questionDetail);
router.post("/delete", questionDelete);

module.exports = router;
