import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L3HomePage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L3 {layoutConfig.name} Home Page</h1>;
};

export default L3HomePage;
