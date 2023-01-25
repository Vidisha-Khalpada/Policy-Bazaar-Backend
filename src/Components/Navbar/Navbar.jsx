import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import { FcCollapse, FcExpand } from 'react-icons/fc'
import Insurance from "./Insurance"
import Renew from "./Renew"
import Claim from "./Claim"
import { useState } from "react"
import {HiOutlineMenu} from "react-icons/hi"
import Support from "./Support"
import SideMenu from "./SideMenu"
import { logoutAction } from "../Login/Redux/Login/loginAction"
import { useDispatch } from "react-redux"
const Navbar=()=>
{
    let logindata=JSON.parse(sessionStorage.getItem("loggedInUserInfo"))
    let navigate=useNavigate()
   const dispatch = useDispatch(); const[hoverstate,sethoverstate]=useState({IP:false,RP:false,Cl:false,Sup:false})
    const[display,setdisplay]=useState(false)
    return(
        <div style={{display:"flex",alignItems:"center",width:"100%"}}>
            <div>
                 <HiOutlineMenu onClick={()=>
                {
                    setdisplay(true)
                }} id="navmenu" size={30}/>
            </div>
        <div id="navparent" onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}>
            
            <div onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}>
                <Link to="/"><img id="navlogo" alt="policyimage" src="https://static.pbcdn.in/cdn/images/new-home/chlogopb.gif?v=1"/></Link>
            </div>
            <div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,IP:true,RP:false,Cl:false,Sup:false})}>
                    <Link>Insurance Products</Link>
                    {
                        hoverstate.IP?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,RP:true,IP:false,Cl:false,Sup:false})}>
                    <Link>Renew Your Policy</Link>
                    {
                        hoverstate.RP?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,Cl:true,IP:false,RP:false,Sup:false})}>
                    <Link>Claim</Link>
                    {
                        hoverstate.Cl?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,Sup:true,IP:false,RP:false,Cl:false})}>
                    <Link>Support</Link>
                    {
                        hoverstate.Sup?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
            </div>
            <div>
                <button onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}><Link to="/login">{logindata&&logindata.isAuth?logindata.name:"Sign In"}</Link></button>
            </div>
            <div>
                <button onClick={()=>{logoutAction(dispatch)}}
                 onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}>Sign out</button>
            </div>
        </div>
        {display?<SideMenu setdisplay={setdisplay}/>:null}
        {hoverstate.IP?<Insurance hoverstate={hoverstate} sethoverstate={sethoverstate} />:null}
        {hoverstate.RP?<Renew hoverstate={hoverstate} sethoverstate={sethoverstate} />:null}
        {hoverstate.Cl?<Claim hoverstate={hoverstate} sethoverstate={sethoverstate} />:null}
        {hoverstate.Sup?<Support hoverstate={hoverstate} sethoverstate={sethoverstate} />:null}
        
        </div>
    )
}
export default Navbar