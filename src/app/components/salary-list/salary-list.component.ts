import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../../services/salary-service.service';
import { Salary } from '../../models/salary.model';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html'
})
export class SalaryListComponent implements OnInit {
  salaries: Salary[] = [];

  constructor(private salaryService: SalaryService) {}

  ngOnInit() {
    this.loadSalaries();
  }

  loadSalaries() {
    this.salaryService.getSalaries().subscribe(data => this.salaries = data);
  }

  deleteSalary(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.salaryService.deleteSalary(id).subscribe(() => this.loadSalaries());
    }
  }
}