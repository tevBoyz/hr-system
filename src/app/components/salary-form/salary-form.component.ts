import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../../services/salary-service.service';
import { Salary } from '../../models/salary.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html'
})
export class SalaryFormComponent implements OnInit {
  salary: Salary = { id: 0, grade: '', amount: 0, currency: ''};
  isEdit = false;

  constructor(
    private service: SalaryService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getSalary(+id).subscribe(data => this.salary = data);
    }
  }
  
  onSubmit() {
  if(this.salary.grade === '' || this.salary.amount === 0 || this.salary.currency === ''){
      this.snackBar.open('Missing field! No entry made.', 'Close', { duration: 3000 });
          this.router.navigate(['/salaries']);

    }
    else
  {const request = this.isEdit
    ? this.service.updateSalary(this.salary)
    : this.service.addSalary({ ...this.salary, id: undefined }); // ✅ Force ID to be generated

  request.subscribe(() => this.router.navigate(['/salaries']));}
}
}


