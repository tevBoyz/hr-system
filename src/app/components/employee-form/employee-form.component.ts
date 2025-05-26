import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { id: 0, firstName: '', lastName: '', email: '', phone: '', resumeUrl: '' ,companyId: 0, departmentId: 0, salaryID: 0 };
  isEdit = false;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getEmployee(+id).subscribe(data => this.employee = data);
    }
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


