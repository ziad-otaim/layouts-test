import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L2AboutPage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L2 {layoutConfig.name} About Page</h1>;
};

export default L2AboutPage;
