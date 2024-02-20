import { useState } from "react"
import axios from 'axios';
import {URL} from "../config.js"
import { useNavigate } from "react-router-dom";
import { toast,Bounce } from 'react-toastify';
export default function ChangePassword(){
    
    const[password,setpasssword]=useState("");
    const[newpassword,setnewpasssword]=useState("");
    const navigate=useNavigate();
    const ChangePass =(e)=>{
      e.preventDefault();
      const body={password}
      if(password.length==0){
       toast.warning("Please Enter Your Old Password")
      }
      else  if(newpassword.length==0){
        toast.warning("Please Enter Your new Password")
      }
      else{
        axios.post(`${URL}/check`,body).then((response)=>{
            console.log(response.data)
            if(response.status===200){
                console.log(newpassword)
               const uid=response.data.uid
                 
                const body1={password:newpassword,uid}
                axios.post(`${URL}/change`,body1).then((response1)=>{
                    console.log(response1.data)
                    const update=response1.data
                    if(update>0){
                        toast.success("Password is changed sucessfully")
                        navigate("/profile")
                    }
                    else{
                        toast.warning(" Check Your old Password")
                    }
                });
               
            }
            else if(response.status==204){
                toast.warning(" Check Your old Password")
              }
           })
      }
       
    }
return(
    <div style={{height:"520px" ,display:"flex",justifyContent:"center"}} >
    <div>
         <b>Old Password: </b>
                 <br></br>
                 <input
                  type="password"
                  className="form-control"
                  placeholder="**************"
                   value={password}
                onChange={(e) => setpasssword(e.target.value)} required
                />

               <br></br>
               <b>New Password: </b>
                 <br></br>
                 <input
                  type="password"
                  className="form-control"
                  placeholder="**************"
                   value={newpassword}
                 onChange={(e) => setnewpasssword(e.target.value)} required
                />

               <br></br>
               <div><center> <button   className="btn btn-danger" onClick={ChangePass} >Reset Password</button></center></div>
              </div>
             
              
    </div>
)
}