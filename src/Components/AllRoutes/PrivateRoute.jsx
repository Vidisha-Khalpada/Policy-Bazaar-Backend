import { Navigate } from "react-router-dom"

const PrivateRoute=({children})=>
{
    let authtoken=localStorage.getItem("authtoken")
    if(authtoken)
    {
        return(
            children
        )
    }
    else
    {
        return <Navigate to="/login" />
    }
}
export default PrivateRoute