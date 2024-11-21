import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L2HomePage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L2 {layoutConfig.name} Home Page</h1>;
};

export default L2HomePage;
