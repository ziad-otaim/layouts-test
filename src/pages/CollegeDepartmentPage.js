import { useLayoutConfig } from "../context/LayoutConfigContext";

const CollegeDepartmentPage = () => {
  const { subdomain } = useLayoutConfig();

  return <h1>Hello {subdomain.name} Department Page</h1>;
};

export default CollegeDepartmentPage;
