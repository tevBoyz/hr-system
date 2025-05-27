import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee.model';
import { Company } from 'src/app/models/company.model';
import { Department } from 'src/app/models/department.model';
import { Salary } from 'src/app/models/salary.model';
import { CompanyService } from 'src/app/services/company-service.service';
import { DepartmentService } from 'src/app/services/department-service.service';
import { SalaryService } from 'src/app/services/salary-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  companies: Company[] = [];
  departments: Department[] = [];
  salaries: Salary[] = [];

  constructor(private employeeService: EmployeeService,private companyService:CompanyService,private departmentService: DepartmentService,private salaryService:SalaryService) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadCompanies();
    this.loadDepartments();
    this.loadSalaries();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }
  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }
  loadSalaries() {
    this.salaryService.getSalaries().subscribe(data => this.salaries = data);
  }

  getCompanyName(companyId: number): string {
    const company = this.companies.find(c => c.id === +companyId);
    return company ? company.name : 'Unknown Company';
  }
  getDepartmentName(departmentId: number): string {
    const department = this.departments.find(d => d.id === +departmentId);
    return department ? department.name : 'Unknown Department';
  }
  getSalaryAmount(salaryId: number): string {
    const salary = this.salaries.find(s => s.id === +salaryId);
    return salary ? `${salary.currency} ${salary.amount}` : 'Unknown Salary';
  }

  deleteEmployee(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }
}
