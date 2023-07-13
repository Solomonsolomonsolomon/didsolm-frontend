import { Fragment } from "react";
import cartLogo from "./../../images/shopping-cart.png";
import drawing from "./../../images/41351737340_e3fc1e94e5_o.jpg";
import clothesOnHanger from "./../../images/37827022501_d5dd06e1af_o.jpg";








export default function Carousel(){
    return (
      <Fragment>
        <div className="carousel border">
          <div>
            <img
              src={clothesOnHanger}
              alt=""
              className="w-[50%] h-24 container lg:h-[300px]"
            />
          </div>
        </div>
      </Fragment>
    );
}