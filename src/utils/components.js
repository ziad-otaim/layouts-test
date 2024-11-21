import { L1HomePage, L1AboutPage } from "../pages/LayoutsPages/L1";
import { L2HomePage, L2AboutPage } from "../pages/LayoutsPages/L2";
import { L3HomePage, L3AboutPage } from "../pages/LayoutsPages/L3";

import { UniversityColleges } from "../components/University";

import { CollegeDepartments, CollegeStudents } from "../components/College";

import {
  DepartmentStaff,
  DepartmentMember,
  DepartmentStudents,
} from "../components/Department";

export const COMPONENTS = {
  L1HomePage: <L1HomePage />,
  L1AboutPage: <L1AboutPage />,
  UniversityColleges: <UniversityColleges />,
  L2HomePage: <L2HomePage />,
  L2AboutPage: <L2AboutPage />,
  CollegeDepartments: <CollegeDepartments />,
  CollegeStudents: <CollegeStudents />,
  L3HomePage: <L3HomePage />,
  L3AboutPage: <L3AboutPage />,
  DepartmentStaff: <DepartmentStaff />,
  DepartmentMember: <DepartmentMember />,
  DepartmentStudents: <DepartmentStudents />,
};
