import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department-service.service';
import { Department } from '../../models/department.model';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  companies: Company[] = [];

  constructor(private departmentService: DepartmentService, private companyService: CompanyService) {}

  ngOnInit() {
    this.loadDepartments();
    this.loadCompanies();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  } 

  getCompanyName(companyId: number): string {
    const company = this.companies.find(c => c.id === +companyId);
    return company ? company.name : 'Unknown Company';
  }

  deleteDepartment(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.departmentService.deleteDepartment(id).subscribe(() => this.loadDepartments());
    }
  }
}