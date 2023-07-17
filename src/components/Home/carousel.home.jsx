import { Fragment } from "react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import cartLogo from "./../../images/shopping-cart.png";
import drawing from "./../../images/41351737340_e3fc1e94e5_o.jpg";
import clothesOnHanger from "./../../images/37827022501_d5dd06e1af_o.jpg";
import img1 from "./../../images/resizedBySolomon (4).png";
import img2 from "./../../images/resizedBySolomon (5).png";
import img3 from "./../../images/resizedBySolomon (6).png";
import img4 from "./../../images/resizedBySolomon (7).png";
export default function Carousel() {
  return (
    <Fragment>
      <div className="carousel border">
        <Splide
          options={{
            rewind: true,
          }}
        >
          <SplideSlide>
            <img
              src={img1}
              alt=""
              className=" flex-shrink-0 flex-0 w-[200px] h-24 container lg:h-[300px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img4}
              alt=""
              className=" flex-shrink-0 flex-0 w-[200px] h-24 container lg:h-[300px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img2}
              alt=""
              className=" flex-shrink-0 flex-0 w-[200px] h-24 container lg:h-[300px]"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={img3}
              alt=""
              className=" flex-shrink-0 flex-0 w-[200px] h-24 container lg:h-[300px]"
            />
          </SplideSlide>
        </Splide>
        <div className="flex flex-nowrap overflow-auto w-[100%]"></div>
      </div>
    </Fragment>
  );
}
