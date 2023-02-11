const mongoose=require("mongoose")
const userinsuranceschema=new mongoose.Schema({
    insurer:Object,
    life_cover:String,
    cover_till_age: Object,
    premium: String,
      clim_settled: Number,
      offers: Array,
})

let UserInsuranceModel=mongoose.model("userinsurance",userinsuranceschema)

module.exports=UserInsuranceModel