export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project_id: number;
  employee_id: number;
}

export interface EmployeeData {
  id: number;
  name: string;
  company_id: number;
  designation_id: number;
}

export interface CompanyData {
  id: number;
  name: string;
  address: string;
}
export interface DesignationData {
  id: number;
  name: string;
}
export const projects: ProjectData[] = [
  { id: 1, name: "Learn React Native" },
  { id: 2, name: "Workout" }
];

export const tasks: TaskData[] = [
  {
    id: 1,
    title: "Install Node",
    completed: true,
    project_id: 1,
    employee_id: 1
  },
  {
    id: 2,
    title: "Install React Native CLI:",
    completed: false,
    project_id: 1,
    employee_id: 1
  },
  {
    id: 3,
    title: "Install Xcode",
    completed: false,
    project_id: 1,
    employee_id: 2
  },
  {
    id: 4,
    title: "Morning Jog",
    completed: true,
    project_id: 2,
    employee_id: 1
  },
  {
    id: 5,
    title: "Visit the gym",
    completed: false,
    project_id: 2,
    employee_id: 2
  }
];

export const employees: EmployeeData[] = [
  {
    id: 1,
    name: "Sam",
    company_id: 1,
    designation_id: 1
  },
  {
    id: 2,
    name: "John",
    company_id: 2,
    designation_id: 2
  }
];
export const companies: CompanyData[] = [
  {
    id: 1,
    name: "Apple",
    address: "AHD"
  },
  {
    id: 2,
    name: "Google",
    address: "GNR"
  }
];

export const designation: DesignationData[] = [
  {
    id: 1,
    name: "SE"
  },
  {
    id: 2,
    name: "SSE"
  }
];
