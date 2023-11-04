import React, { createContext, useState } from "react";

export const ModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
