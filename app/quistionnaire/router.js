var express = require("express");
var router = express.Router();
const { index, quistCreate, succes, detailQues } = require("./controller");

/* GET home page. */
router.get("/", index);
router.post("/create", quistCreate);
router.get("/succes", succes);
router.get("/detailQues/(:id)", detailQues);

module.exports = router;
