import { useContext } from "react";
import logo from "./../../images/didsolmkiddies_logo.jpg";
import cartLogo from "./../../images/shopping-cart.png";
import "./home.css";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="flexlogos">
        <button>login</button>
        <img src={logo} id="logo" alt="logo" />
        <img id="cartSign" src={cartLogo} alt="cart sign" />
      </div>
      <h1>👋 Hi there!!!Welcome to Didsolm kiddies Affairs</h1>
      <button id="tour">Want a tour?</button>
   <h1>POPULAR</h1>
   <div>
    <img src="" alt="img" />
    <p>name</p>
    <p>price</p>
   </div>
   <h1>CATEGORIES</h1>
   <div>BABY</div>
   <div>NEW BORN</div>
   <div>BATHING</div>
   <div>BACK TO SCHOOL</div>
   <div>FASHION</div>
    
      <Outlet></Outlet>
    </>
  );
}
