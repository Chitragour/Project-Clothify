import ImageCarousel from "./ImageCaresoul"
import ClothesCarousel from "./ClothesCarousel"
import About from "./About";
import card1 from '../../Images/card1.png';
import Reach from '../../Images/Reach.png';
import sustainable from '../../Images/sustainable.jpg';
import '../../Css/Home/home.css';
import { Link } from "react-router-dom";

const Home=()=>{
   return(
    <>
     <div className="home">
     <div className="clothify-content"> 
     <br></br>
        <h2 id="mainHeading">For People And Planet.</h2>
      </div>
      <br></br>
      <br></br>
      <ClothesCarousel></ClothesCarousel>
      <p style={{fontFamily:"Garamond",fontSize:"25px",paddingBlock:"50px",paddingLeft:"30px",paddingRight:"30px",textAlign:"center"}}>"The greatest threat to our planet is the belief that someone else will save it." - Robert Swan</p>
      <pre>  
      <ImageCarousel></ImageCarousel>
      <p style={{fontFamily:"Garamond",fontSize:"25px",paddingBlock:"50px",paddingLeft:"30px",paddingRight:"30px",textAlign:"center"}}>"I like my money right where I can see it… hanging in my closet." - Carrie Bradshaw </p>
      </pre>
      <div style={{display: 'flex',justifyContent:"center", flexDirection:'row', marginLeft:"40px", marginRight:"40px"}}>
          


          <div className="card mx-3" style={{width: "20rem",  borderRadius:"10px", height:"630px", marginLeft:"50px"}}>
          <img src={card1} alt="Card image cap" style={{width:"100%", height:"80%"}}/>
          <div class="card-body">
          <p class="card-text" style={{}}><h4>Induge in Comfort Clothing</h4><p> Offering coupons for brands that specialize in comfortable clothing</p></p>
          </div>
          </div>
            
          <div className="card mx-3" style={{width: "20rem",  borderRadius:"10px", height:"630px", marginLeft:"50px"}}>
          <img src={Reach} alt="Card image cap" style={{width:"100%", height:"76%"}}/>
          <div class="card-body">
          <p class="card-text" style={{}}><h4>Your Feedback is valuable to us</h4><p>Write to us




<Link to="/contact" style={{alignItems:"center",display:"flex",color:"black",textDecoration:"underline", fontSize:"27px"}}>Feedback</Link></p></p>
          </div>
          </div>

         <div className="card mx-3" style={{width: "20rem",  borderRadius:"10px", height:"630px", marginLeft:"50px"}}>
          <img src={sustainable} alt="Card image cap" style={{width:"100%", height:"170%"}}/>
          <div class="card-body">
          <p class="card-text" style={{}}><h4>Join us in the Movement</h4><p>Exchange your used clothes for great deals</p><Link to="/order" style={{alignItems:"center",display:"flex",color:"black",textDecoration:"underline",fontSize:"27px"}}>Exchange</Link></p>
          </div>
          </div>

      {/* </div> */}

      </div>
      {/* <img src={pandalogo} alt="" /> */}

      <br></br>
      <br></br>
      <p style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"80px"}}>
      <h2 style={{fontFamily:"sans-serif",fontSize:"30px",}}>Our Approach</h2>   
      <p style={{fontFamily:"Garamond",fontSize:"25px"}}>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
      </p>
      <div><About></About></div>
     </div>
    </>
   )
   
}
export default Home