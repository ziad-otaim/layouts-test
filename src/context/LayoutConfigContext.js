import React, { createContext, useContext, useState, useEffect } from "react";
import { getSubdomain, getLayoutConfig } from "../utils/layoutConfig";

const LayoutConfigContext = createContext();

export const LayoutConfigProvider = ({ layouts, children }) => {
  const [layoutConfig, setLayoutConfig] = useState({});

  useEffect(() => {
    const subdomain = getSubdomain() || "mu";
    const config = getLayoutConfig(layouts, subdomain);

    // console.log(layouts);
    // console.log(subdomain);
    // console.log(config);

    setLayoutConfig(config);
  }, []);

  return (
    <LayoutConfigContext.Provider value={{ layoutConfig }}>
      {children}
    </LayoutConfigContext.Provider>
  );
};

export const useLayoutConfig = () => useContext(LayoutConfigContext);
