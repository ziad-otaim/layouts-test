import { useLayoutConfig } from "../../context/LayoutConfigContext";

const CollegeDepartments = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} College Departments </h1>;
};

export default CollegeDepartments;
