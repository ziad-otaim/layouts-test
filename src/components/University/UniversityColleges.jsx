import { useLayoutConfig } from "../../context/LayoutConfigContext";

const UniversityColleges = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello {layoutConfig.name} University Colleges Page</h1>;
};

export default UniversityColleges;
