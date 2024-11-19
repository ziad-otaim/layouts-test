import { useLayoutConfig } from "../../context/LayoutConfigContext";

const UniversityColleges = () => {
  const { subdomain } = useLayoutConfig();

  return <h1>Hello {subdomain.name} University Colleges Page</h1>;
};

export default UniversityColleges;
