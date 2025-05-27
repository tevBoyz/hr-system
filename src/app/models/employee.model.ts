export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  companyId: number; // Linked to the company this employee works for
  departmentId: number; // Linked to the department this employee belongs to
  salaryId: number; // Linked to the salary this employee receives
}