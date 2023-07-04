import "./admin.css";
import Input from "../input/input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/dataContext";
import { enterCustomSize } from "./../../utils/createCustomSize";
import { convertImageToBase64 } from "./../../utils/handleImg";
export default function Admin() {
  const obj = useContext(DataContext);

  return (
    <>
      <h1>Admin Page</h1>
      <h1>Welcome User</h1>

      <h2>Add an item</h2>

      <form onSubmit={handleSubmit}>
        <span>
          <Input placeholder="name"></Input>
          <Input placeholder="category"></Input>
        </span>
        <Input placeholder="price (NGN)" type="Number"></Input>
        <Input placeholder="colors:seperate colors with a comma"></Input>
        <Input placeholder="quantity" type="number" />
        <label htmlFor="">
          <p>enter size(s)..you can select more than one</p>
          <select name="size" id="sizes" multiple>
            <option value="L" className="sizes">
              L
            </option>
            <option value="S" className="sizes">
              S
            </option>
            <option value="XL" className="sizes">
              XL
            </option>
            <option value="medium" className="sizes">
              MEDIUM
            </option>
          </select>
        </label>

        <label htmlFor="">
          select Image
          <Input type="file" id="file"></Input>
        </label>
        <button>ADD ITEM</button>
      </form>
      <br />
      <button className="orangeBtn" onClick={enterCustomSize}>
        enter custom size
      </button>

      <div className="customForm"></div>
      <h1>YOUR PRODUCTS</h1>
      <input type="search" placeholder="search products" />
      <div>all products here</div>
    </>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  let file = document.getElementById("file");
  convertImageToBase64(file.files[0]).then((e) => {
    console.log(e);
  });
  console.log(e.target.elements[5].value);
}
