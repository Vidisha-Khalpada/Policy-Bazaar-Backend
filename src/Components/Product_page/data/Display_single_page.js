import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Display_single_page = ({er}) => {
     // let d = {
    //     insurer:{ image:hdfc,
    //             name:"HDFC Life" },
    //     life_cover: "50",
    //     cover_till_age:{ max_age:"60" ,
    //                 max_limit:"99" ,
    //                 cover_term:"33" ,},
    //     premium:"599" ,
    //     clim_settled:97.9,
    //     offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
    //     }
    let navigate = useNavigate()
  return (
    <tr className='tr'>
        <td><img src={er.insurer.image} alt={er.insurer.name}/></td>
        <td>{er.life_cover} L</td>
        <td className='maxage'>{er.cover_till_age.max_age} yrs<span className='span1'>max age {er.cover_till_age.max_limit} yrs</span></td>
        <td>{er.clim_settled}</td>
        <td><button onClick={()=>navigate(`/lifeinsurance/health-insurance/payment/${er.clim_settled}`)} >{er.premium} ▶</button></td>
    </tr>
  )
}
