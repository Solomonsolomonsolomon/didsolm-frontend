import { Fragment } from "react";
import Headers from "../Home/headers.home";
import Slider from "../Home/sliders.home";
export default function Login() {
  return (
    <div className="h-[100%] border border-black">
      <Headers />
      <Slider />
      <div className="container flex justify-center  items-center content-center h-[100%]">
        <form className="border-black border p-10 ">
          <input
            type="email"
            placeholder="email"
            className="placeholder:text-center"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            className="placeholder:text-center"
          />
          <button className="bg-blue-900 border text-[12px] p-1 text-white">login</button>
        </form>
      </div>
    </div>
  );
}
