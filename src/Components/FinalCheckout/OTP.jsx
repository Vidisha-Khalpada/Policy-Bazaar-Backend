import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import "./Checkout.css"
const OTP=()=>
{
    const[otp,setotp]=useState(0);
    const navigate=useNavigate()
    const ValidateData=()=>
    {
        if(otp==="1234")
        {
            alert("Payment Successfull. Please Wait while we redirect you to the home page...")
            {
                navigate("/")
            }
        }
        else
        {
            alert("Wrong OTP Entered, OTP Resent, Please enter the correct one")
        }
    }
    return(
    <div id="otpparent" style={{marginBottom:"20px"}}>
        <h4>OTP is sent to the registered mobile number</h4>
        <input style={{width:"80%"}} id="otpinput" type="number" placeholder="Enter the OTP sent" onChange={(e)=>
        {
            setotp(e.target.value)
        }}></input><br/>
        <button onClick={ValidateData} style={{marginTop:"20px"}}>SUBMIT</button>
    </div>
    )
}
export default OTP