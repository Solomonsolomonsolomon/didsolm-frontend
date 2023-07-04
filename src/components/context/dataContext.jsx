import { createContext, useState, useEffect, Children } from "react";

const DataContext = createContext();
export function Provider({ children }) {
  return (
    <DataContext.Provider
      value={{
        name: "wow",
        hi: "hellp you",
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
