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
    
        
       },[userOrders]) 

      const deleteOrder=(oid)=>{
        console.log(oid);
        axios.delete(`${URL}/deleteOrder/${oid}`).then((response)=>{
            console.log(response.data)
            toast.success("Your order has been cancelled succesfully !")
            }).catch()
         }
         
      

      const editOrder=(oid)=>{
        navigate("/editOrder",{state:oid})
      }
    return (
    <div style={{height:"620px"}}> 
    <h2 id="o">Your Orders</h2>
    <hr></hr>

<br></br>
     
<table className="table table-striped">
<thead>
 <tr>
   <th scope="col">Date</th>
   <th scope="col">Description</th>
   <th scope="col">NoOfItems</th>
   <th scope="col">Edit</th>
   <th scope="col">Delete</th>

 </tr>
</thead>
<tbody>
    
 { userOrders.map((order)=>{
    return(
     <tr key={order[0]}>
     <td scope="row">{order[2]}</td>
     <td>{order[3]}</td>
     <td>{order[1]}</td>
     <td>     
          <button 
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
          type="button" onClick={()=>{editOrder(order[0])}}>Edit order</button></td>
              <td>
                   
                  <button
          className="navbar-toggler" style={{padding:"10px",marginLeft:"50px",marginRight:"20px"}}
            onClick={()=>{deleteOrder(order[0])}}>Cancel order</button></td>
             
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