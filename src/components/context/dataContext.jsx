import { createContext, useState, useEffect, Children } from "react";

const DataContext = createContext();

export function Provider({ children }) {
  let [toggleSlider, setSliderToggle] = useState(false);
  return (
    <DataContext.Provider
      value={{
        baseUrl: `http://localhost:5678`,
        toggleSlider: toggleSlider,
        setSliderToggle: setSliderToggle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
