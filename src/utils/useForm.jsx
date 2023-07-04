import { useState } from "react";
const useForm = () => {
  let [values, setValues] = useState({});

  const handleChange = (e) => {
    e.persist();
    setValues((prev) => {
        
      return {
        ...prev,
        [e.target.name]: e.target.value,
        submitted: false,
      };
    });
  };

  const clearForm = () => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: "" };
    });
  };

  return [values, handleChange];
};
export default useForm;
