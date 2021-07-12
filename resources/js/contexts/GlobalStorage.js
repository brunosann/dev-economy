import React, { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <GlobalContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};
