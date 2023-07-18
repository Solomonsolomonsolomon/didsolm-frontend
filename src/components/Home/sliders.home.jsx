import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { isLoggedIn, getStoredInfo,decodeToken} from "./../Login/performlogin";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/dataContext";

function Slider() {
  decodeToken()
  let [loginStatus, setLoginStatus] = useState(false);
  let [linkClicked, setLinkClicked] = useState(new Date());

  function handleLinkClick() {
    setLinkClicked(new Date());
    setSliderToggle(true);
  }
  useEffect(() => {
    isLoggedIn().then((statOfLogin) => {
      setLoginStatus(statOfLogin);
    });
  }, []);
  let { setSliderToggle, toggleSlider } = useContext(DataContext);
  return (
    <div className="h-[100%]">
      <div
        className="bg-blue-950 grid grid-cols-1 justify-items-center justify-self-center  content-center text-justify  w-0 absolute h-[100%] none z-20"
        id="slider"
      >
        <Link
          to={loginStatus ? "/logout" : "/login"}
          className="text-transparent p-0 m-0 relative "
          id="a1"
          onClick={true ? removeSlider : handleLinkClick}
        >
          {loginStatus ? "logout" : "login"}
        </Link>
        <a
          href=""
          className="text-transparent block relative"
          id="a2"
          onClick={handleLinkClick}
        >
          orders
        </a>
        <a
          href=""
          className="text-transparent block relative"
          id="a3"
          onClick={handleLinkClick}
        >
          history
        </a>
      </div>
    </div>
  );
}

function removeSlider() {
  console.log("hhhh");
  let slider = document.getElementById("slider");
  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  slider.classList.remove("animate-animateSlider");
  a1.classList.remove("animate-giveColor");
  a2.classList.remove("animate-giveColor");
  a3.classList.remove("animate-giveColor");
}
export default Slider;
