import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutConfig } from "../context/LayoutConfigContext";

const RoutesMiddleware = ({ children, middlewares = [] }) => {
  const { subdomain } = useLayoutConfig();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = async () => {

    };

    handleNavigation();
  }, [location, navigate, middlewares]);

  return <>{children}</>;
};

export default RoutesMiddleware;
