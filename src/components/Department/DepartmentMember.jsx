import { useLayoutConfig } from "../../context/LayoutConfigContext";
import { useParams } from 'react-router-dom';

const DepartmentMember = () => {
  const { layoutConfig } = useLayoutConfig();
  const params = useParams()

  return <h1>Hello {layoutConfig.name} Department Member {params.id}</h1>;
};

export default DepartmentMember;
