import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Page4.css"
export const Page4 = () => {
  let men = React.useRef(null)
  let women = React.useRef(null)
  let navigate = useNavigate()
  function Handlemen(){
    men.current.style.color = "red"
    women.current.style.color = "black"
  }
  function HandleWomen(){
    women.current.style.color = "red"
    men.current.style.color = "black"
  }
  return (
    <div>
         <div>
    <button onClick={()=>navigate('/lifeinsurance/health-insurance/family-health-insurance/contact')}>◀</button>
    <h1>Tell us about yourself</h1>
        </div>
    <h1 className='pers'>Fill personal details</h1>
    <div className='gender'>
        <button ref={men} onClick={Handlemen} ><h4>🙋🏻‍♂️</h4><h4>Male</h4></button>
        <button ref={women} onClick={HandleWomen}><h4>🙋🏽‍♀️</h4><h4>Female</h4></button>
    </div>
    <div className='page4_display'>
    
       <fieldset> <legend>Enter Full Name</legend><input type="text" placeholder={`Enter your name`} /></fieldset>
       <fieldset> <legend>Enter Mobile number</legend><input type="number" placeholder={`Enter mobile number`} /></fieldset>
    </div>

    <div>
        <h5>Your personal data is safe with us.</h5>
        <button onClick={()=>navigate(`/lifeinsurance/health-insurance/plans`)} >continue</button>
    </div>
    </div>
  )
}
