import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L1AboutPage = () => {
  const { subdomain } = useLayoutConfig();

  return <h1>Hello {subdomain.name} About Page</h1>;
};

export default L1AboutPage;
