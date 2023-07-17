import Admin from "./components/Admin/admin";
import DataContext, { Provider } from "./components/context/dataContext";
import "./index.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { useContext, useState } from "react";
import useForm from "./utils/useForm";
import createForm from "./utils/createForm";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import { isLoggedIn } from "./components/Login/performlogin";
export default function App() {


  return (
    <div className="h-[100%]">
      <Provider>
        <HashRouter>
          <Routes>
            <Route path="/" exact index element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="/home/admin" element={<Admin />}></Route>
              <Route path="/home/home" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={isLoggedIn() ? <Admin /> : <Login />}
            ></Route>
            <Route path="/logout" element={<Home />} />
            <Route path="*" element={<div>404 not found Route</div>}></Route>
          </Routes>
        </HashRouter>
      </Provider>
    </div>
  );
}
