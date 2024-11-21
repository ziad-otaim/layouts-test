import { useLayoutConfig } from "../../context/LayoutConfigContext";

const DepartmentStaff = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} Department Staff</h1>;
};

export default DepartmentStaff;
