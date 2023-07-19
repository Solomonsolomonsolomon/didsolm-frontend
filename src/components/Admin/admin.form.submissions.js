import { useEffect, useContext } from "react";
import DataContext from "../context/dataContext";

export default function AdminFormSubmissions() {



  function SubmitNewProductForm(payload) {
    let { baseUrl } = useContext(DataContext);
    useEffect(() => {
      return async () => {
        let res = await fetch(`${baseUrl}/products/new`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        let json = await res.json();
        console.log(json);
      };
    }, []);
  }
}
