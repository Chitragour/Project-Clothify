import { useState } from "react"
import '../Css/Profile.css';
import AllotedCoupons from "./AllocatedCoupons";
import GetOrder from "./GetOrder";
import { cilAlignCenter } from "@coreui/icons";
import { toast,Bounce } from 'react-toastify';
import { Link } from "react-router-dom";
export default function UserProfile(){
    const[isSidebarOpen,setisSidebarOpen]=useState(false)
    
    const toggleSidebar=()=>{
      if(sessionStorage['uid']===undefined){
        toast.warning("Please Login First")
      }
      else{
        setisSidebarOpen(!isSidebarOpen)
      }
        
    }
    return (

        <div className="profile" style={{display:"flex",alignItems:"center" ,flexDirection:"column"}}>
            <div >
       
        <button onClick={toggleSidebar} >
          {isSidebarOpen ? 'Close Profile' : 'Open Profile'}
        </button>
      </div>

    
      {isSidebarOpen && (
        <div className="" >
          <br></br>
          <b><h1 style={{fontFamily:"Helvetica",fontSize:"40px",color:"red"}}>User Profile</h1></b>
          <p>User Id: <b>{ sessionStorage['uid']  }</b></p>
          <p>Email: <b>{ sessionStorage['email']  }</b></p>
          <p>Role: <b>{ sessionStorage['role']  }</b></p>
          <p>User Name: <b>{ sessionStorage['username']  }</b></p>
          <br></br>
          <div className="text-left mt-3" style={{alignItems:"center"}}>
                <a href="/changePassword" className="forgot-password-link" alignItems="center">
                  Change Password?
                </a>
              </div>
              <br></br>
              <div><button style={{backgroundColor:"#e63843",margin:"30px"}}><Link to="/order" style={{alignItems:"center",display:"flex",color:"black"}}>Exchange Now !</Link></button>

              <button style={{backgroundColor:"#e63843"}}><Link to="/getOrderByUid" style={{alignItems:"center",display:"flex",color:"black"}}>View Orders</Link></button>
  
          </div>
          <br></br>
          <pre>
          <div style={{height:"400px",width:"1000px"}}>
          <AllotedCoupons></AllotedCoupons> 
          </div>
          </pre>
        
     
          
          
              

              
         
          {/* <button onClick={toggleSidebar}>Close</button> */}
        </div> )}
        
        </div>
    
    )
}