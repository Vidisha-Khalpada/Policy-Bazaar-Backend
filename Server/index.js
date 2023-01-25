const express=require("express")
const Connection = require("./Config/Connection")
const router = require("./Routes/Routes")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/",router)
app.listen(3000,()=>
{
    try {
        Connection()
        console.log("Server is listening at port 3000")
    } catch (error) {
        console.log(error)
    }
})