import React, { useEffect, useState } from "react";
import RoutesWrapper from "./components/RoutesWrapper";
import { LayoutConfigProvider } from "./context/LayoutConfigContext";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [layouts, setLayouts] = useState(null);

  const fetchlayouts = async () => {
    try {
      const res = await fetch("http://localhost:3001/layouts");

      setLayouts(await res.json());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchlayouts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (layouts) {
    return (
      <LayoutConfigProvider layouts={layouts}>
        <RoutesWrapper />
      </LayoutConfigProvider>
    );
  }

  return <div></div>;
};

export default App;
