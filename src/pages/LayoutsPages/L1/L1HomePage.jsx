import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L1HomePage = () => {
  const { subdomain } = useLayoutConfig();

  return <h1>Hello {subdomain.name} Home Page</h1>;
};

export default L1HomePage;
