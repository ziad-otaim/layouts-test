import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L1AboutPage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L1 {layoutConfig.name} About Page</h1>;
};

export default L1AboutPage;
