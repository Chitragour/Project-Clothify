import { useEffect, useState } from "react";
import axios from 'axios';
import {URL} from "../config"

import { useNavigate } from "react-router-dom";
import "../Css/AllocatedCoupons.css";
  import CouponPointing from "../Images/CouponPointing.avif" 
const AllotedCoupons =()=>{
    const[Details,setuserDetails]=useState([]);
    const  navigate =useNavigate();
    useEffect(()=>{
     
     const fetchdata =async()=>{
     try {
        let uid=sessionStorage['uid']
      const response= await axios.get(`${URL}/allocatedCoupons/${uid}`)
      console.log(response.data)
      
      setuserDetails(response.data)
     } catch (error) {
         
     }
 }
 fetchdata()
     
    },[])
    return(
        
        <div className="AllocatedMain d-flex justify-content-center"> 
        <div className="deal"></div>
      
        
        <div className="man "> <img src={CouponPointing} alt="" style={{border:"2px solid black"}} /></div>
   <div className="order-page">
   <h2 id="d">Allocated Coupons</h2>
 
 

 <table className="order-table">
   <thead>
     <tr>
       <th>UserName</th>
       <th>Brand</th>
       <th>Discount %</th>
       <th>Validity</th>
 </tr>
   </thead>
   <tbody>
     {
       Details.map((user) => (
       <tr key={user.uid}>
        <td>{user[1]}</td>
         <td>{user[6]}</td>
         <td>{user[7]}</td>
         <td>{user[8]}</td>
         <td>{user[9]}</td>
         <td>{ user[10]}</td>
        </tr>
       ))}
     </tbody>
 </table>
   </div>
   </div>
    )

}
export default AllotedCoupons;