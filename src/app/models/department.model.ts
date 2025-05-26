export interface Department {
  id: number;
  name: string;
  companyId: number; // Linked to the company this department belongs to
}