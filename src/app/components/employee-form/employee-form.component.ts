import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Company } from 'src/app/models/company.model';
import { Department } from 'src/app/models/department.model';
import { Salary } from 'src/app/models/salary.model';
import { CompanyService } from 'src/app/services/company-service.service';
import { DepartmentService } from 'src/app/services/department-service.service';
import { SalaryService } from 'src/app/services/salary-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  //IDs being 0 means its a default value for a new employee, not associated with any department or company
  employee: Employee = { id: 0, firstName: '', lastName: '', email: '', phone: '', resumeUrl: '' ,companyId: 0, departmentId: 0, salaryId: 0 };
  companies: Company[] = [];
  departments: Department[] = [];
  salaries: Salary[] = [];
  isEdit = false;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private companyService: CompanyService,
    private departmentService: DepartmentService,
    private salaryService: SalaryService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getEmployee(+id).subscribe(data => this.employee = data);
    }

    this.loadCompanies();
    this.loadDepartments();
    this.loadSalaries();
  }


  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }
  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }
  loadSalaries() {
    this.salaryService.getSalaries().subscribe(data => {
      this.salaries = data;
    });
  }
  
  onSubmit() {
  if(this.employee.firstName === '' || this.employee.lastName === '' || this.employee.email === '' || this.employee.phone === ''){
      this.snackBar.open('Missing field! No entry made.', 'Close', { duration: 3000 });
          this.router.navigate(['/employees']);

    }
    else
  {const request = this.isEdit
    ? this.service.updateEmployee(this.employee)
    : this.service.addEmployee({ ...this.employee, id: undefined }); // ✅ Force ID to be generated

  request.subscribe(() => this.router.navigate(['/employees']));}
}
}


