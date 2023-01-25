import { Link } from "react-router-dom"

const Claim=({hoverstate,sethoverstate})=>
{
    return(
        <div id="navbarclaim">
            <Link to="/claim/new-claim" onClick={()=>
            {
                sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
            }}>File a new Claim</Link><br/>
            <hr/>
            <Link to="/claim/already-filed-claim"
            onClick={()=>
            {
                sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
            }}>Claim is already filed with the Insurer</Link><br/>
            <hr/>
            <Link to="/claim/filing-claim" onClick={()=>
            {
                sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
            }}>Know more about filing claim</Link><br/>
            <hr/>
            <Link to="/claim/track-exising-claim" onClick={()=>
            {
                sethoverstate({IP:false,RP:false,Cl:false,Sup:false})
            }}>Track Existing Claim</Link><br/>
        </div>
    )
}
export default Claim