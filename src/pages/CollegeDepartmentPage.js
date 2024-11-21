import { useLayoutConfig } from "../context/LayoutConfigContext";

const CollegeDepartmentPage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} Department Page</h1>;
};

export default CollegeDepartmentPage;
