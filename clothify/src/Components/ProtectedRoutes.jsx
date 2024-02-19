import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoutes=({element,allowedRoles})=>{

    const navigate=useNavigate()
    const [role,setRole]=useState("")
    useEffect(()=>{
        const userRole=sessionStorage.getItem("role")
        if(!userRole || !allowedRoles.includes(userRole)){
            navigate("/login")
        }else{
            setRole(userRole)
        }

    },[navigate,allowedRoles])

    return(
      role? element :null
    )
}

export default ProtectedRoutes