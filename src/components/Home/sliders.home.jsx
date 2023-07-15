import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { isLoggedIn } from "./../Login/performlogin";
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let [...others] = a;
console.log( others);
function Slider() {
  return (
    <div className="h-[100%]">
      <div
        className="bg-blue-950 grid grid-cols-1 justify-items-center justify-self-center  content-center text-justify  w-0 absolute h-[100%] none z-20"
        id="slider"
      >
        <Link
          to="/login"
          className="text-transparent p-0 m-0 relative "
          id="a1"
        ></Link>
        <a href="" className="text-transparent block relative" id="a2">
          orders
        </a>
        <a href="" className="text-transparent block relative" id="a3">
          history
        </a>
      </div>
    </div>
  );
}
export default Slider;
