import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L3AboutPage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L3 {layoutConfig.name} About Page</h1>;
};

export default L3AboutPage;
