const express=require("express")
const router=express.Router()
const {ColorController}=require("../Controller/Color.controller")

router.get("/",ColorController.getAll)
router.get("/:id",ColorController.getById)
router.post("/",ColorController.Post)
router.delete("/:id",ColorController.Delete)

module.exports=router