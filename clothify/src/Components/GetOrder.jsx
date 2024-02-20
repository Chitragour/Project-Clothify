import { useEffect, useState } from "react";
import axios from 'axios';
import {URL} from "../config"
import '../Css/pickupPerson.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const GetOrder =()=>{
    const[userOrders,setuserOrders]=useState([{}]);
    const  navigate =useNavigate();
    useEffect(()=>{
     
     const fetchdata =async()=>{
     try {
      const response= await axios.get(`${URL}/orderById/${sessionStorage['uid']}`)
      console.log(response.data)
    setuserOrders(response.data)
     } catch (error) {
         
     }
 }
 fetchdata()
     
    },[]) 
    useEffect(()=>{
     
        const fetchdata =async()=>{
        try {
         const response= await axios.get(`${URL}/orderById/${sessionStorage['uid']}`)
         console.log(response.data)
       setuserOrders(response.data)
        } catch (error) {
            
        }
    }
    fetchdata()
        
       },[userOrders]) 

      const deleteOrder=(oid)=>{
        axios.delete(`${URL}/deleteOrder/${oid}`).then((response)=>{
            console.log(response.data)
            
            }).catch()
         }
         
      

      const editOrder=(oid)=>{
        navigate("/editOrder",{state:oid})
      }
    return (
    <div style={{height:"620px"}}> 
    <h2 id="A">Your Order</h2>

<br></br>
     
<table className="dashboard" >
<thead>
 <tr>
   <th>Date</th>
   <th>Description</th>
   <th>NoOfItems</th>
   <th>Edit</th>
   <th>Delete</th>

 </tr>
</thead>
<tbody>
    
 { userOrders.map((order)=>{
    return(
     <tr key={order.oid}>
     <td>{order.pickupDate}</td>
     <td>{order.pickupDescription}</td>
     <td>{order.noOfItems}</td>
     <td>     
          <button 
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
          type="button" onClick={()=>{editOrder(order.oid)}}>Edit order</button></td>
              <td>
                   
                  <button
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
            onClick={()=>{deleteOrder(order.oid)}}>Cancel order</button></td>
             
            </tr>
    
    )
   
  
} )
}
 
</tbody>
</table>
</div>
)
}
export default GetOrder;