import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { L1HomePage, L1AboutPage } from "../pages/LayoutsPages/L1";

import { UniversityColleges } from "../components/University";

import RoutesMiddleware from "./RoutesMiddleware";
import { useLayoutConfig } from "../context/LayoutConfigContext";

const COMPONENTS = {
  L1HomePage: L1HomePage,
  L1AboutPage: L1AboutPage,
  UniversityColleges: UniversityColleges,
};

const RoutesWrapper = () => {
  const { layoutConfig } = useLayoutConfig();

  if (layoutConfig?.pages) {
    return (
      <Router>
        <RoutesMiddleware>
          <Routes>
            {layoutConfig.pages.map((page) => (
              <Route
                path={page.path}
                element={COMPONENTS[page.component]}
                key={page.id}
              />
            ))}
          </Routes>
        </RoutesMiddleware>
      </Router>
    );
  }
  return <div></div>;
};

export default RoutesWrapper;
