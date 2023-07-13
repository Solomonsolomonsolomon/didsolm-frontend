import { Fragment } from "react";





import logo from "./../../images/didsolmkiddies_logo.jpg";
import cartLogo from "./../../images/shopping-cart.png";




export default function Headers(){
    return (
      <Fragment>
        <div className="header flex justify-around flex-wrap-reverse bottom-1 ">
          <img src={logo} alt="Logo" className="lg:w-20 w-10" />
          <p className="lg:text-[35px] text-center md:text-[20px] sm:text-[15px]">
            DIDSOLM KIDDIES AFFAIRS
          </p>
          <img
            src={cartLogo}
            alt=""
            className="w-7 md:w-6 md:h-8  lg:w-11  lg:h-11 lg:top-0 sm:w-7"
          />

          <div className="hamburger block lg:m-4" onClick={hi}>
            <span className="bg-black w-5 h-1 animate-bounce m-1 block lg:w-7"></span>
            <span className="bg-black w-6 h-1 m-1 block animate-bounce lg:w-8 lg:my-2"></span>
            <span className="bg-black w-7 h-1 m-1 block animate-bounce lg:w-9 lg:my-2"></span>
          </div>
        </div>
      </Fragment>
    );
}

function hi() {
  let slider = document.getElementById("slider");
  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  slider.classList.toggle("animate-animateSlider");
  a1.classList.toggle("animate-giveColor");
  a2.classList.toggle("animate-giveColor");
  a3.classList.toggle("animate-giveColor");
}
console.log("showing2times");