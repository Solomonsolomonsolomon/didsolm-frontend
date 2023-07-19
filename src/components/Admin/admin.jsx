import "./admin.css";
import Input from "../input/input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Headers from "./../Home/headers.home";
import Slider from "../Home/sliders.home";
import AdminForm from "./adminForm";
import DataContext from "../context/dataContext";
import { enterCustomSize } from "./../../utils/createCustomSize";
import { convertImageToBase64 } from "./../../utils/handleImg";
import { SubmitNewProductForm } from "./admin.form.submissions";
export default function Admin() {
  let [adminForm, setAdminForm] = useState({});
  function handleInput(e) {
    setAdminForm((prev) => {
      if (e.target.name == "color" || e.target.name == "category") {
        let split = e.target.value.split(",");
        return { ...prev, [e.target.name]: split };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let opt = document.getElementsByName("opt");
    let size = [];
    opt.forEach((e) => {
      e.selected ? size.push(e.value) : "";
    });
    adminForm.size = size;
    let file = document.getElementById("file");
    convertImageToBase64(file.files[0]).then((img) => {
      adminForm.image = img;
      SubmitNewProductForm(adminForm);
    });
  }
  const obj = useContext(DataContext);

  return (
    <>
      <Headers />
      <Slider />
      <h1>Admin Page</h1>
      <h1>Welcome User</h1>
      <AdminForm handleInput={handleInput} handleSubmit={handleSubmit} />

      <h1>YOUR PRODUCTS</h1>
      <input type="search" placeholder="search products" />
      <div>all products here</div>
    </>
  );
}
