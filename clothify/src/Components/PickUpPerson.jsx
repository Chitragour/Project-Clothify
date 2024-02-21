import { useEffect, useState } from "react";
import axios from 'axios';
import {URL} from "../config"
import '../Css/pickupPerson.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PickUpPerson =()=>{
    const[Details,setuserDetails]=useState([]);
    const  navigate =useNavigate();
    useEffect(()=>{
     
     const fetchdata =async()=>{
     try {
      const response= await axios.get(`${URL}/userDetail`)
      console.log(response.data)
      setuserDetails(response.data)
     } catch (error) {
         
     }
 }
 fetchdata()
     
    },[])
    
    useEffect(()=>{
     
      const fetchdata =async()=>{
      try {
       const response= await axios.get(`${URL}/userDetail`)
       console.log(response.data)
       setuserDetails(response.data)
      } catch (error) {
          
      }
  }
  fetchdata()
      
     },[Details])
     
    

    const acceptOrder=async(user)=>{
       try {
       const user1=Details.filter(u=>(u[0]==user))
       console.log(user1)
       user1.forEach((u)=>{
       let oid=u[6]
       let pid= parseInt(sessionStorage["pid"])
         console.log(oid ,pid)
         const body ={oid,pid:{pid}}
         axios.post(`${URL}/acceptPickUpOrder`, body).then((response)=>{
          console.log(response.data)
          
          }).catch()
       })
       toast.success(" order is accepted")
        
       } catch (error) {
        
       }    
    }
    const AllotedCoupons=(user)=>{
      const user1=Details.filter(u=>(u[0]==user))
      console.log(user1)
      
      let oid=user1[0][6]
      console.log(user,oid)
      const data={uid:user,oid:user1[0][6]}
      console.log(data)
      navigate("/coupons",{state:data})
    }
  return (
    <div  className="pickup" style={{height:"620px"}}> 
             <h2 id="d">Authorised PickUpPerson</h2>
        <div className="pick-page">
      <br></br>
      
      <table className="pickup-table">
        <thead>
          <tr>
           
            <th>UserName</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Address</th>
            
            <th>NoOfItems</th>
            <th>Date</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          {
            Details.map((user) => (
            
             
            <tr key={user.uid}>
             
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
              <td>{user[4]}</td>
              <td>{user[5]}</td>
              
              <td>{user[7]}</td>
              <td>{user[8]}</td>
              <td>{user[9]}</td>
              
              <td>     
          <button 
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
          type="button" onClick={()=>{acceptOrder(user[0])}}>Accept order</button></td>
              <td>
                   
                  <button
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
            onClick={()=>{AllotedCoupons(user[0])}}>Give Coupons</button></td>
             
            </tr>
            
          ))}
          
        </tbody>
      </table>
        </div>
        </div>
  )
}

export default PickUpPerson