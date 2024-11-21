import { useLayoutConfig } from "../../context/LayoutConfigContext";

const CollegeStudents = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} College Students </h1>;
};

export default CollegeStudents;
