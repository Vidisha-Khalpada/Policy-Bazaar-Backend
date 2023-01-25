import React, { useState } from 'react'
import "./Page2.css"
import {useSelector,useDispatch} from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom'
export const Page2 = () => {
  const[age,setAge] = useState({
    self: 0,
    spouse: 0,
    son: 0,
    doughter: 0,
    father: 0,
    mother: 0,
  })
    let data = useSelector((st)=> st.Health_reducer.user_health_insurance)
    
    let s = Object.keys(data)

    let navigate = useNavigate()
    function Handle_page2(){

      navigate('/lifeinsurance/health-insurance/family-health-insurance/pincode')
    }
    function Handle_change(e){
      
    }
  return (
    <div>
        <div>
    <button onClick={()=>navigate('/lifeinsurance/health-insurance/family-health-insurance')}>◀</button>
    <h1>How old is the member?</h1>
        </div>
        
    <h1 className='selectage'>Select age</h1>
    <div className='page2_display'>
    {s.map((key,value)=>{
       if(data[key]==true){return <fieldset> <legend>{key}</legend><input onChange={Handle_change} type="number" min='18' max='100' key={value} placeholder={`Enter ${key} age`} /></fieldset>}
        
    })}
    </div>
    <div>
        <button onClick={Handle_page2} >continue</button>
    </div>
    </div>
  )
}
