import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setOpenSidebar] = useState(true);
  const [popup, setPopup] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!sidebar);
  };
  const togglePopup = () => {
    setOpenSidebar(!setPopup);
  };

  return (
    <AppContext.Provider value={{ sidebar, toggleSidebar, popup, togglePopup }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
