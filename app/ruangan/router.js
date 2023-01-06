var express = require("express");
var router = express.Router();
const {
  index,
  ruanganDetail,
  ruanganCreate,
  ruanganUpdate,
  ruanganDelete,
} = require("./controller");
const { isLogin } = require("../../middleware/auth");

router.use(isLogin);
router.get("/", index);
router.post("/detail", ruanganDetail);
router.post("/create", ruanganCreate);
router.post("/update", ruanganUpdate);
router.post("/delete", ruanganDelete);

module.exports = router;
