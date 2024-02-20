import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast,Bounce } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {URL} from "../config";
export default function ForgetPass(){
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[emailId,setEmail]=useState("");
    const navigate=useNavigate()
    const handleResetPassword=(e)=>{
        e.preventDefault();
        if(username.length==0){
           
            toast.warning("Please Enter Your Username")
        }
        else if(emailId.length==0){
          toast.warning("Please Enter Your EmailId")
      }
        else if(password.length==0){
            toast.warning("Please Enter Your Password")
        }
        else if(!emailId.match("@gmail.com")){
          toast.warning("Email is not in correct format")
        }
        else{
         
              const body={username,email:emailId,password}
              try {
                axios.post(`${URL}/reset`,body).then((response)=>{
                  if(response.status==204){
                    toast.warning(" Invalid Credentials")
                  }
                  else if(response.status==200){
                    console.log(response.data)
                    toast.success("Successfully Change the Password")
                    navigate("/userlogin")
                  }
                  
                }).catch() 
              } catch (e) {
                
              }
             
        }
    }
    
    return(
       
    <div className="container mt-5" style={{width:"600px" ,margin:"auto"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">   
            <center><h2 className="card-title">Forgot Password</h2></center>
              
              <div className="form-group">
                <b>Username: </b>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)} required
                />
                 <br></br>
                 <b>Email: </b>
                 <br></br>
                 <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                 value={emailId}
                   onChange={(e) => setEmail(e.target.value)} required
                />

                 <br></br>
                 <b>NewPassword: </b>
                 <br></br>
                 <input
                  type="password"
                  className="form-control"
                  placeholder="**************"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} required
                />

               <br></br>
              </div>
             <center> <button className="btn btn-danger" onClick={handleResetPassword}>Reset Password</button></center>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );

    
} 