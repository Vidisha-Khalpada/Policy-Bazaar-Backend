import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import "./Checkout.css"
import Credit from "./Credit"
import Debit from "./Debit"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const FinalCheckout=()=>
{
    const[card,setcard]=useState({debit:true,credit:false})
    const {clim_settled}=useParams()
    const url=process.env.REACT_APP_URL
    let token=localStorage.getItem("authtoken")
    useEffect(()=>
    {
        let f=async()=>
        {
            let arr=[]
            let res=await fetch(`${url}/allinsurance`)
            let data=await res.json()
            arr=data.data.filter((ele)=>
            {
                return ele.clim_settled==clim_settled
            })
            console.log(arr[0])
            axios.post(`${url}/addinsurance`,arr[0],{
                headers:{
                    "Authorization":token
                }
            }).then((resp)=>console.log(resp))
        }
        f()
        
        
        
    },[])
    const navigate=useNavigate()
    return(
        <div id="fcmaincont" style={{marginBottom:"20px"}}>
            <div id="fcparent">
                <div id="fcchild1">
                    <div className="fcicon" style={card.debit?{backgroundColor:"skyblue"}:null}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4021/4021708.png"/>
                        <button style={card.debit?{backgroundColor:"skyblue"}:null} onClick={()=>
                        {
                            setcard({debit:true,credit:false})
                        }}>Debit Card</button>
                    </div>
                    <div className="fcicon" style={card.credit?{backgroundColor:"skyblue"}:null}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png"/>
                        <button style={card.credit?{backgroundColor:"skyblue"}:null} onClick={()=>
                        {
                            setcard({debit:false,credit:true})
                        }}>Credit Card</button>
                    </div>
                    <div className="fcicon">
                        <img src="https://cdn-icons-png.flaticon.com/512/4519/4519104.png"/>
                        <button>Net Banking</button>
                    </div>
                    <div className="fcicon" style={{height:"60%"}}></div>
                    
                </div>
                <div style={{width:"100%"}}>
                    {
                        card.debit?<Debit />:null
                    }
                    {
                        card.credit?<Credit />:null
                    }
                </div>
            </div>
            <div id="fcchild2">
                <h2>Total Payable Amount:</h2><br/>
                <h5>Rs: {JSON.parse(localStorage.getItem("finalPrice")) || 0}</h5>
                <hr/><br/>
                <div style={{margin:"auto",width:"60%"}}>
                <button onClick={()=>
                {
                    navigate("/otp")
                }}>Proceed To Pay</button>
                </div>
            </div>
        </div>
    )
}
export default FinalCheckout