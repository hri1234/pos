const express = require("express");
const {printdata } =
 require('../../controller/PrinterController/PrinterController')
const router = express.Router();

router.post("/", printdata)


module.exports = router;