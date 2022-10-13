import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <AppContext.Provider value={{ openSidebar, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
