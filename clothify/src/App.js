import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgetPass from './Components/ForgetPass';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/Home/About';
import Order from './Components/Order';
import Contact from './Components/Contact';
import UserProfile from './Components/UserProfile';
import ChangePassword from './Components/ChangePassword';
import SingOut from './Components/SignOut';
import DashBoard from './Components/DashBoard';

import PickUpPersonLogin from './Components/PickUpPersonLogin';
import PickUpPerson from './Components/PickUpPerson';
import Coupons from './Components/Coupons';
import AllotedCoupons from './Components/AllocatedCoupons';

import 'bootstrap/dist/css/bootstrap.min.css';
import PickUpPersonfeedback from './Components/PickUpPersonfeedback';
import UserLogin from './Components/UserLogin';
import { Bounce, ToastContainer } from 'react-toastify';
import AddPickup from './Components/AddPickUp';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  return (<div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/userlogin" element={<UserLogin/>} />
    <Route path="/registration" element={<Register/>} />
    <Route path="/forgetpassword" element={<ForgetPass/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route
  path="/order"
  element={
    <ProtectedRoutes
      element={<Order />}
      allowedRoles={["user"]}
    />
  }
/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/profile" element={<ProtectedRoutes element={<UserProfile/>} allowedRoles={["user","admin"]}/>} />
    <Route path="/changePassword" element={<ChangePassword/>} />
    <Route path="/signout" element={<SingOut/>} />
    <Route path="/dashBoard" element={<ProtectedRoutes element={<DashBoard/>} allowedRoles={["admin"]} />} />
    <Route path="/pickupPersonLogin" element={<PickUpPersonLogin/>}  />
    <Route path="/pickupPerson" element={<PickUpPerson/>}  />
    <Route path="/coupons" element={<Coupons/>}  />
    <Route path="/allocatedCoupons" element={<ProtectedRoutes element={<AllotedCoupons/>} allowedRoles={["user"]}/>}  />
    <Route path="/PickUpPersonfeedback" element={<ProtectedRoutes element={<PickUpPersonfeedback/>} allowedRoles={["user"]}/>}  />
    <Route path="/addPickup" element={<ProtectedRoutes element={<AddPickup/>} allowedRoles={["admin"]}/>}  />
  </Routes>
  <Footer></Footer>
  
  </BrowserRouter>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
</div>);
}

export default App;
