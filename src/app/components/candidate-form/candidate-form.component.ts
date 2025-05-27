import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/candidate.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department-service.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html'
})
export class CandidateFormComponent implements OnInit {
  candidate: Candidate = { id: 0, firstName: '', lastName: '', email: '',departmentId: 0, phone: '', resumeUrl: '' };
  departments: Department[] = [];
  isEdit = false;

  constructor(
    private service: CandidateService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.loadDepartments();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getCandidate(+id).subscribe(data => this.candidate = data);
    }
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }
  
  onSubmit() {
  if(this.candidate.firstName === '' || this.candidate.lastName === '' || this.candidate.email === '' || this.candidate.phone === ''){
      this.snackBar.open('Missing field! No entry made.', 'Close', { duration: 3000 });
          this.router.navigate(['/candidates']);

    }
    else
  {const request = this.isEdit
    ? this.service.updateCandidate(this.candidate)
    : this.service.addCandidate({ ...this.candidate, id: undefined }); // ✅ Force ID to be generated

  request.subscribe(() => this.router.navigate(['/candidates']));}
}
}