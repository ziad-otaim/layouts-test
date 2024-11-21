import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RoutesMiddleware from "./RoutesMiddleware";
import { useLayoutConfig } from "../context/LayoutConfigContext";
import { COMPONENTS } from "../utils/components";

const RoutesWrapper = () => {
  const { layoutConfig } = useLayoutConfig();

  if (layoutConfig?.pages) {
    return (
      <Router>
        <RoutesMiddleware>
          <Routes>
            {layoutConfig.pages.map(({ path, component }, index) => (
              <Route key={index} path={path} element={COMPONENTS[component]} />
            ))}
            <Route path="*" element={<div className="error">Error 404, Page Not Found!</div>} />
          </Routes>
        </RoutesMiddleware>
      </Router>
    );
  }
  return <div></div>;
};

export default RoutesWrapper;
