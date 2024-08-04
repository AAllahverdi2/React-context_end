const mongoose =require("mongoose")
const ColorModel=mongoose.model("Color", new mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    isCount:Number,
    category:String

}))
module.exports ={ColorModel}