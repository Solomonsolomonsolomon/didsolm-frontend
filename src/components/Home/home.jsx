import { useContext, useState } from "react";
import logo from "./../../images/didsolmkiddies_logo.jpg";

import Headers from "./headers.home";
import Slider from "./sliders.home";
import SearchBar from "./searchBar.home";
import Carousel from "./carousel.home";
import Categories from "./categories.home";
import cartLogo from "./../../images/shopping-cart.png";
import drawing from "./../../images/41351737340_e3fc1e94e5_o.jpg";
import clothesOnHanger from "./../../images/37827022501_d5dd06e1af_o.jpg";
import DataContext from "../context/dataContext";

import { Outlet, Link } from "react-router-dom";
export default function Home() {
  let { baseUrl } = useContext(DataContext);
  console.log(baseUrl);

  function checkLocation() {
    console.log(location.protocol, location.hostname, location.href);
    if (location.href.includes(`#/logout`)) {
      console.log("working");
      document.cookie = `accessToken=loggedOut;expiresIn=Thurs jan 7 1970`;
      document.cookie = `refreshToken=;`;
    }
  }
  checkLocation();
  return (
    <div className="h-[100%] w-[100%] relative h-[500vh]">
      <div className="">
        <Headers />
        <Slider />
        <SearchBar />
      </div>

      <Carousel />
      <Categories />

      {/* div end */}
    </div>
  );
}
