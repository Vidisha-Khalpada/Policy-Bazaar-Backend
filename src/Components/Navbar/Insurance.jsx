import { FiUmbrella } from 'react-icons/fi'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { FaPiggyBank } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { Link } from "react-router-dom"
//import Data from "./Data"
import { useEffect } from 'react'
import { useState } from 'react'
const Insurance=({hoverstate,sethoverstate})=>
{
    const[TermInsurance,setterminsurance]=useState([])
    const[OtherInsurance,setotherinsurance]=useState([])
    const[InvestmentPlans,setinvestmentplans]=useState([])
    const[HealthInsurance,sethealthinsurance]=useState([])
    const[CarInsurance,setcarinsurance]=useState([])
    useEffect(()=>
    {
        const f=async()=>
        {
            let res=await fetch(`http://localhost:3000/navbar`)
            let data=await res.json()
            setterminsurance(data.data[0].TermInsurance)
            setotherinsurance(data.data[0].OtherInsurance)
            setinvestmentplans(data.data[0].InvestmentPlans)
            sethealthinsurance(data.data[0].HealthInsurance)
            setcarinsurance(data.data[0].CarInsurance)
        }
        f()
    },[])
    return(
        <div id="navbarinsuranceprod">
        <div>
            <div className="icontext">
                <FiUmbrella color="purple" size="20"/>
                <h3>Term Insurance</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(Data.TermInsurance)
                    TermInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link onClick={()=>
                            {
                                sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                            }} to={`/lifeinsurance/term-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <HiOutlineSquares2X2 color="cyan" size="20"/>
                <h3>Other Insurance</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    OtherInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link onClick={()=>
                                {
                                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                                }} to={`/lifeinsurance/other-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <FaPiggyBank color="orange" size="20"/>
                <h3>Investment Plans</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    InvestmentPlans.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link onClick={()=>
                                {
                                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                                }} to={`/lifeinsurance/investment-plans/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <FaHeartbeat color="pink" size="20"/>
                <h3>Health Insurance</h3>
            </div>
            
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    HealthInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link onClick={()=>
                                {
                                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                                }} to={`/lifeinsurance/health-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <AiFillCar color="lightblue" size="20"/>
                <h3>Car Insurance</h3>
            </div>
            
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    CarInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link onClick={()=>
                                {
                                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                                }} to={`/lifeinsurance/car-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}
export default Insurance