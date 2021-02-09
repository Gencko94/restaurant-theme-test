import React, { createContext, useState } from "react";
import { GeneralContextProps } from "@/interfaces/interfaces";

export const GeneralProvider = createContext<GeneralContextProps>({
  sideMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleOpen: () => {},
});

const GeneralContext: React.FC = ({ children }) => {
  const [sideMenuOpen, toggleOpen] = useState(false);
  return (
    <GeneralProvider.Provider
      value={{
        sideMenuOpen,
        toggleOpen,
      }}
    >
      {children}
    </GeneralProvider.Provider>
  );
};

export default GeneralContext;
