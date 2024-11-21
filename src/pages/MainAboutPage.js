import React from "react";
import { useLayoutConfig } from "../context/LayoutConfigContext";
import { useLocation } from "react-router-dom";
import DepartmentAbout from "../components/AboutComponents/DepartmentAbout";
import CollegeAbout from "../components/AboutComponents/CollegeAbout";
import UniAbout from "../components/AboutComponents/UniAbout";

const AboutComponent = ({ layoutConfig, params }) => {
  if (layoutConfig.type === "college") {
    if (params.length >= 1) {
      return <DepartmentAbout department={params[0]} />;
    } else {
      return <CollegeAbout college={layoutConfig.name} />;
    }
  }
  return <UniAbout />;
};

const MainAboutPage = () => {
  const { layoutConfig } = useLayoutConfig();
  const { pathname } = useLocation(); // Access the full location object
  const params = pathname.split("/").splice(2);

  return (
    <div style={{ padding: "2rem" }}>
      <AboutComponent layoutConfig={layoutConfig} params={params} />
    </div>
  );
};

export default MainAboutPage;
