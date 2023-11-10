import React, { createContext, useContext, useState } from "react";

export const ContextValue = createContext(null);

export function ContextProvider({ children }) {
  const [value, setValue] = useState([]);

  return (
    <ContextValue.Provider value={{ setValue, value }}>
      {children}
    </ContextValue.Provider>
  );
}
