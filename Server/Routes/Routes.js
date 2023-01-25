const express=require("express")
const NavbarModel = require("../Models/Navbar")

const router=express.Router()
router.get("/navbar",async(req,res)=>
{
    try {
        let data=await NavbarModel.find()
        res.send({
            data:data
        })
    } catch (error) {
        res.status(400).send({
            message:error
        })
    }
})
router.post("/navbar",async(req,res)=>
{
    try {
        let data=await NavbarModel.create(req.body)
        res.send({
            data:data
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router