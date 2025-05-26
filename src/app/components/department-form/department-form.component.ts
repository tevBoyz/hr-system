import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department-service.service';
import { Department } from '../../models/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html'
})
export class DepartmentFormComponent implements OnInit {
  department: Department = { id: 0, name: '',companyId: 0 };
  isEdit = false;

  constructor(
    private service: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getDepartment(+id).subscribe(data => this.department = data);
    }
  }
  
  onSubmit() {
  if(this.department.name === ''){
      this.snackBar.open('Missing field! No entry made.', 'Close', { duration: 3000 });
          this.router.navigate(['/departments']);
    }
    else
  {const request = this.isEdit
    ? this.service.updateDepartment(this.department)
    : this.service.addDepartment({ ...this.department, id: undefined }); // Force ID to be generated

  request.subscribe(() => this.router.navigate(['/departments']));}
}
}