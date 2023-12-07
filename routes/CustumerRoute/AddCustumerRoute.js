const express = require("express");
const {GetALLdata, Getdata, Postdata, Putdata, DeleteData } =
 require('../../controller/CustumerController/AddCustumerCtrl')
const router = express.Router();


router.get("/",GetALLdata)
router.get("/:id",Getdata)
router.post("/", Postdata)
router.put("/:id",Putdata)
router.delete("/:id",DeleteData)

module.exports = router;