import { Link } from "react-router-dom"
import { FiUmbrella } from "react-icons/fi"
import { FaHeartbeat } from "react-icons/fa"
import { AiFillCar } from "react-icons/ai"
import {TbMotorbike} from "react-icons/tb"
const Renew=({hoverstate,sethoverstate})=>
{
    return(
        <div id="navbarrenew">
            <div className="icontext">
                <FiUmbrella color="purple" size="20"/>
                <Link to="/renewal/life-renewal"onClick={()=>
                {
                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                }}>Life Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <FaHeartbeat color="pink" size="20"/>
                <Link to="/renewal/health-renewal"onClick={()=>
                {
                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                }}>Health Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <AiFillCar color="lightblue" size="20"/>
                <Link to="/renewal/motor-renewal" onClick={()=>
                {
                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                }}>Motor Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <TbMotorbike color="orange" size="20"/>
                <Link to="/renewal/two-wheeler-renewal" onClick={()=>
                {
                    sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
                }}>Two Wheeler Renewal</Link>
            </div>
        </div>
    )
}
export default Renew