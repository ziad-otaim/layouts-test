import React from "react";
import { useLayoutConfig } from "../context/layoutConfigContext";

const Header = () => {
  const { layoutConfig } = useLayoutConfig();

  return (
    <header
      style={{
        backgroundColor: layoutConfig.theme,
        padding: "1rem",
        color: "white",
      }}
    >
      <img
        src={layoutConfig.logo}
        alt={`${layoutConfig.name} Logo`}
        style={{ height: "50px" }}
      />
      <h1>{layoutConfig.name}</h1>
    </header>
  );
};

export default Header;
