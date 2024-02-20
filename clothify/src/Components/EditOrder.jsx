import { useEffect, useState } from "react";
import axios from 'axios';
import {URL} from "../config"
import '../Css/pickupPerson.css';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditOrder =()=>{
    const location=useLocation()
    const [pickupDate, setpickupDate] = useState(new Date());
    const [pickupDescription, setpickupDescription] = useState('');
    const [noOfItems, setnoOfItems] = useState(0);
    
    const navigate=useNavigate();
    
        
      function handleSubmit(e){
        e.preventDefault();
        if(pickupDate.length==0){
            console.log("ynrn");
            toast.warning("Enter the Next Date")
        }
        else if(pickupDescription.length==0){
            toast.warning("Please Enter Description ")
        }
        else if(noOfItems.length==0){
          toast.warning("Please Enter Discount Greater Than 0")
        }
        
       else  if(sessionStorage['uid']===undefined){
          toast.warning("Please Login First")
        }
        else{
         
          // console.log(location.state)
            const oid=location.state
            console.log(location.state)
              const body={pickupDate,pickupDescription,noOfItems}
              try {
                console.log(location.state)
                axios.put(`${URL}/updateOrder/${oid}`,body).then((response)=>{
                  console.log(response.data)
                 toast.success("Order is Updated Successfully")
                  navigate("/profile" )
                }).catch() 
              } catch (e) {
                
              }
             
        }
       };
    return(
        <div className='order'>
        <img src='./order.svg' style={{width:"400px",height:"400px"}}/>
    <div className="app-box app-feedback-form  " style={{left:'0px'}}>
            <h2 className="app-heading1">Change Order</h2><br></br><br></br>
                <form onSubmit={handleSubmit} className="app-feed-form"> 
                <label className="label">
                Pickup Date:
                <input
                    type="date"
                    name="pickupDate"
                    autoComplete="off"
                    //  value={fromDate.getFullYear().toString()+"-"+(fromDate.getMonth()+1).toString().padStart(2,0)
                    //  +"-"+(fromDate.getDate()).toString().padStart(2,0)+"-"}
                     value={pickupDate}
                     onChange={(e) => setpickupDate(e.target.value)}
                    className={pickupDate?.length ? '': 'error'}
                     
                    required 
                />
                </label>
                <br />
                <label>
                Description About Clothes:
                <textarea
                    name="pickupDescription"
                    value={pickupDescription}
                    onChange={(e) => setpickupDescription(e.target.value)}
                    className={pickupDate?.length ? '': 'error'}
                    required 
                />
                </label>
                <br />
                <label className="label">
                <label>
                No of Items:
                <input
                min={1} 
              
                    type="number"
                    name="noOfItems"
                    value={noOfItems}
                    onChange={(e) => setnoOfItems(e.target.value)}
                    className={noOfItems?.length ? '': 'error'}
                    required 
                />
                </label>
                </label>
                <br />
                <center><button type="submit" className="button">Submit Changes</button></center>
            </form> 
            
        
            
        
            </div>
            </div>
    )

}
export default EditOrder