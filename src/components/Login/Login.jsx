import { Fragment, useContext, useState } from "react";
import Headers from "../Home/headers.home";
import Slider from "../Home/sliders.home";
import { loginFetch, isLoggedIn, handleLoginRedirect } from "./performlogin";
import LoginForm from "./login.form";
import DataContext from "../context/dataContext";


export default function Login() {

  let [inputValues, setInputValues] = useState({});
  function handleLoginFormEntries(e) {
    Object.assign(inputValues, { [e.target.name]: e.target.value });
  }
  function handleLoginFormSubmission(e) {
    e.preventDefault();
    loginFetch(inputValues).then(() => {
      handleLoginRedirect();
    });
  }

  return (
    <div className="h-[100%] border border-black">
      <Headers />
      <Slider />
      <LoginForm
        handleLoginFormSubmission={handleLoginFormSubmission}
        handleLoginFormEntries={handleLoginFormEntries}
      />
    </div>
  );
}
