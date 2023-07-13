




import {Link} from 'react-router-dom'
import Login from '../Login/Login';
export default function Slider(){
    return (
        <div className="h-[100%]">

       
      <div
        className="bg-blue-950 grid grid-cols-1 justify-items-center justify-self-center  content-center text-justify  w-0 absolute h-[100%] none z-20"
        id="slider"
      >
        <Link to="/login" className="text-transparent p-0 m-0 relative " id="a1">
          login
        </Link>
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