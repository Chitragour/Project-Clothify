import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {URL} from "../config";
import { useLocation } from "react-router-dom";
const Coupons =()=>{
        const location=useLocation()
        const[brand,setBrand]=useState("")
        const[discount,setDiscount]=useState(0)
        const[validity,setValidity]=useState()
        const navigate=useNavigate();
        
      function giveCoupons(e){
        e.preventDefault();
        if(brand.length==0){
            console.log("ynrn");
            toast.warning("egwrh")
        }
        else if(discount.length==0){
            toast.warning("egwrh")
        }
        else{
         
          console.log(location.state)
            const uid=location.state
              const body={brand,discount,validity,uid:{uid}}
              try {
                axios.post(`${URL}/addCoupons`,body).then((response)=>{
                  console.log(response.data)
                  navigate("/pickupPerson")
                }).catch() 
              } catch (e) {
                
              }
             
        }
       };
    return(
        <div className="container mt-5" style={{width:"600px" ,margin:"auto"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 align="center" className="card-title">Allocate Coupons</h2>
                <br></br>
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="brand" className="form-label"><b>Brand:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="brand"
                      placeholder="Enter Brand"
                      value={brand}
                     onChange={(e) => setBrand(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><b>Discount:</b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="discount"
                      placeholder="0%"
                     value={discount}
                     onChange={(e) => setDiscount(e.target.value)}
                      required
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Validity" className="form-label"><b>Assign Validity:</b></label>
                    <input
                      type="date"
                      className="form-control"
                      id="validity"
                      placeholder="2024-02-14"
                     value={validity}
                      onChange={(e) => setValidity(e.target.value)}
                      required
                    />
                  </div>
                    
  
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                     onClick={giveCoupons}
                    >
                      Allocate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Coupons;