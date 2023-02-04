import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setOpenSidebar] = useState(false);
  const [popup, setPopup] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!sidebar);
  };
  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <AppContext.Provider value={{ sidebar, toggleSidebar, popup, togglePopup }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
