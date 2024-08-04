const express=require ("express")
const app= express()
const ColorRouter=require ("../back/Router/Color.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT =process.env.PORT || 7954
app.use(express.json())
mongoose.connect("mongodb+srv://agamaliyevallahverdi2:Allahverdi123.@cluster0.4uy4jne.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/product",ColorRouter)
app.listen(PORT,()=>{
    console.log("back is running")
})