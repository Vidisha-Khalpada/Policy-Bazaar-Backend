import axios from "axios"
import { useEffect, useState } from "react"
import "./Account.css"
const Account=()=>
{
    let token=localStorage.getItem("authtoken")
    const url=process.env.REACT_APP_URL
    const[data,setdata]=useState([])
    useEffect(()=>
    {
        axios.get(`${url}/individualinsurance`,{
            headers:{
                "Authorization":token
            }
        }).then((res)=>
        {
            console.log(res.data)
            setdata(res.data.data)
        })
    },[])
    return(
        <>
            <h2>Your Policies</h2>
        <div id="accountdataparent">
            {
                data.map((ele,i)=>
                {
                    return(
                        <div id="accountdata" key={i}>
                            
                            <h5>Policy Name: {ele.insurer.name}</h5>
                            <img width="100px" src={ele.insurer.image}></img>
                            <h5>Premium Rs. {ele.premium}/per month</h5>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Account