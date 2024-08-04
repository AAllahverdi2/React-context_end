
const {ColorModel}=require("../Model/Color.model")

const ColorController={
        getAll:async(req,res)=>{
            try {
                console.log("object")
                const target=await ColorModel.find({})
                console.log(target)
                res.send(target)
                
            } catch (error) {
                res.send("item is not found")
            }
        },
        getById:async(req,res)=>{
            try {
                const {id}=req.params
                const target=await ColorModel.findById(id)
                res.send(target)
                
            } catch (error) {
                res.send("item is not found")
            }
        },
        Post:async(req,res)=>{
            try {
                const {title,price,image,isCount,category}=req.body
                const newItem=new ColorModel( {title,price,image,isCount,category})
                await newItem.save()
                res.send(newItem)
                
                
            } catch (error) {
                res.send("item is not post")
            }
        },
        Delete:async(req,res)=>{
            try {
                const {id}=req.params
                await ColorModel.findByIdAndDelete(id)
                res.send("item deleted")
                
            } catch (error) {
                res.send("item was deleted")
            }
        },
}

module.exports ={ColorController}