var express = require("express");
var router = express.Router();
const {
  table,
  userDetail,
  userCreate,
  userUpdate,
  userDelete,
} = require("./controller");
const { isLogin } = require("../../middleware/auth");

router.use(isLogin);
router.get("/", table);
router.post("/userDetail", userDetail);
router.post("/create", userCreate);
router.post("/update", userUpdate);
router.post("/delete", userDelete);

module.exports = router;
