import { createContext, useContext, useState } from "react";

const HamburgerContext = createContext(null);

export const HamburgerProvider = ({ children }) => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <HamburgerContext.Provider value={{ showHamburger, setShowHamburger }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export const useHamburger = () => {
  return useContext(HamburgerContext);
};
