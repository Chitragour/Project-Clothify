import { useEffect, useState } from "react";
import  axios from "axios";
import {URL} from "../config.js"
import { toast,Bounce } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const PickUpPersonfeedback =()=>{
     const[pickUpPersons,setPickUpPersons]=useState([{}])
      const [FeedBackPickUpPerson, setFeedBackPickUpPerson] = useState('');
      const[pickUpPerson,setPickUpPerson]=useState('');
      const navigate=useNavigate()
       useEffect(()=>{
        try {
              axios.get(`${URL}/getPickUPPersons`).then((response)=>{
                console.log(response.data)
                setPickUpPersons(response.data)
                setPickUpPerson(response.data[0].name)
              })
        } catch (error) {
            
        }
     },[])
    
     const handleSubmit =async(e)=>{
      
      e.preventDefault();

     const person= pickUpPersons.filter(p=>(p.name==pickUpPerson))
      console.log(sessionStorage['uid'],pickUpPerson,FeedBackPickUpPerson,person[0].pid)
      console.log(person)

        const body={feedBackPickUpPerson:FeedBackPickUpPerson,uid:{uid:sessionStorage['uid']},pid:{pid:person[0].pid}}
        if(sessionStorage['uid']===undefined){
          toast.warning("Please Login First")
        }
        
        else{
          try {
            axios.post(`${URL}/PickupPersonFeedback`,body).then((response)=>{
             toast.success("will get in touch")
             navigate("/profile")
              console.log(response.data)
              
            }).catch() 
          } catch (e) {
            
          }
        }
        
        
   }
    
    return(
        <div >
        <div className="app-box app-feedback-form  "  style={{alignSelf:'center',margin:'auto',marginTop:'10px',marginBottom:"10px",height:"500px"}}>
                <h2 className="app-heading1">FeedBack</h2><br></br>
                    <form onSubmit={handleSubmit} className="app-feed-form"> 
                   
                    
                    <label>
                     FeedBack
                    <textarea
                        name="FeedBackPickUpPerson"
                        value={FeedBackPickUpPerson}
                        onChange={(e) => setFeedBackPickUpPerson(e.target.value)}
                        className={FeedBackPickUpPerson.length ? '': 'error'}
                        required 
                    />
                    </label>
                    <br />
                    
                    <select onChange={(e)=>{setPickUpPerson(e.target.value)}}>
                   { pickUpPersons.map((pickup) => (
  <option value={pickup.name}  >{pickup.name}</option>
                    ))}
</select>

                    <center><button type="submit" className="button" style={{margin:"10px"}}>Submit</button></center>
                </form> 
                
            
                
            
                </div>
                </div>
    )
}
export default PickUpPersonfeedback;