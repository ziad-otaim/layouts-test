import React from "react";
import { useLayoutConfig } from "../context/LayoutConfigContext";

const HomePage = () => {
  const { layoutConfig } = useLayoutConfig();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome to {layoutConfig.name} Home Page</h2>
    </div>
  );
};

export default HomePage;
