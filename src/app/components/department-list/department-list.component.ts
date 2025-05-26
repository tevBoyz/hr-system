import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department-service.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }

  deleteDepartment(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.departmentService.deleteDepartment(id).subscribe(() => this.loadDepartments());
    }
  }
}