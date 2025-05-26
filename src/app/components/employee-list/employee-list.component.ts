import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  deleteEmployee(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }
}
