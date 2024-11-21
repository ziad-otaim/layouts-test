import { useLayoutConfig } from "../../context/LayoutConfigContext";

const DepartmentStudents = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} Department Students</h1>;
};

export default DepartmentStudents;
