import Admin from "./components/Admin/admin";
import DataContext, { Provider } from "./components/context/dataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import useForm from "./utils/useForm";
import createForm from "./utils/createForm";
import Home from "./components/Home/home";
export default function App() {
  let [value, handleChange] = useForm();
  console.log(typeof value, typeof handleChange);
  // let inputField = createForm([
  //   {
  //     type: "text",
  //     placeholder: "form 1",
  //     name: "form1",
  //     onChange: handleChange,
  //     value: value.form1,
  //   },
  //   {
  //     type: "text",
  //     placeholder: "form2",
  //     name: "form2",
  //     onChange: handleChange,
  //     value: value.form2,
  //   },
  //   { type: "file" },
  //   { type: "submit", value: "submit form" },
  // ]);

  // let h = {
  //   name: "hello",
  // };
  // Object.prototype.constructor = () => {
  //   {
  //     submitted: false;
  //   }
  // };
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home/admin" element={<Admin />}></Route>
            <Route path="/home/home" element={<Home />} />
          </Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="*" element={<div>404 not found Route</div>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
