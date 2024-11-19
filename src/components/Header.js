import React from "react";
import { useLayoutConfig } from "../context/SubdomainContext";

const Header = () => {
  const { subdomain } = useLayoutConfig();

  return (
    <header
      style={{
        backgroundColor: subdomain.theme,
        padding: "1rem",
        color: "white",
      }}
    >
      <img
        src={subdomain.logo}
        alt={`${subdomain.name} Logo`}
        style={{ height: "50px" }}
      />
      <h1>{subdomain.name}</h1>
    </header>
  );
};

export default Header;
