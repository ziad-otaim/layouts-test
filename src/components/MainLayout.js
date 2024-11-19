import React from "react";
import { useLayoutConfig } from "../context/SubdomainContext";

const MainLayout = () => {
  const { subdomain } = useLayoutConfig();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome to {subdomain.name} Portal</h2>
      <p>Explore resources, courses, and events specific to your subdomain.</p>
    </div>
  );
};

export default MainLayout;
