import { useEffect, useState } from "react";
import axios from 'axios';

import {URL} from "../config"
import '../Css/DashBoard.css';
import { useNavigate } from "react-router-dom";

const DashBoard =()=>{
    const[Details,setuserDetails]=useState([]);
    const[feedBack,setfeedBack]=useState([]);
     const navigate=useNavigate()

     const addPickup =()=>{navigate("/addPickup")}
   useEffect(()=>{
    
    const fetchdata =async()=>{
    try {
     const response= await axios.get(`${URL}/orderDetails`)
     const res= await axios.get(`${URL}/userfeedback`)
     console.log(response.data)
     setfeedBack(res.data)
     setuserDetails(response.data)
    } catch (error) {
        
    }
}
fetchdata()
    
   },[])
    return(
          <div style={{height:"620px"}}> 
             <b><h2 id="A">Admin Dashboard</h2></b>
      
      <br></br>
      <h2 id="A">Order details</h2>
                 
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>Uid</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Coupon Brand</th>
            <th>Validity</th>
           
          </tr>
        </thead>
        <tbody>
         {
           Details.map((user)=>{
            return (
              <tr key={user.uid}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
              <td>{user[4]}</td>
            </tr>
            )
            
           })
         }
          
        </tbody>
      </table>
      <br></br>
      <h2 id="A">PickupPerson FeedBack</h2>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>PickUpPerson Name</th>
            <th>Feedback</th>
            <th>Username</th>
           
           
          </tr>
        </thead>
        <tbody>
         {
           feedBack.map((user)=>{
            return (
              <tr key={user.uid}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              
            </tr>
            )
            
           })
         }
          
        </tbody>
      </table>
       <button style={{marginLeft:"600px"}} onClick={addPickup}> Add PickUp Person</button>
        </div>
       
    )
}
export default DashBoard;