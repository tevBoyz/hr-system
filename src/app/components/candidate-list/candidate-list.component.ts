import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/candidate.model';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department-service.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
  departments: Department[] = [];
  departmentsLoaded: boolean = false;
  constructor(private candidateService: CandidateService, private departmentService: DepartmentService) {}



  ngOnInit() {
    this.loadCandidates();
    this.departmentService.getDepartments().subscribe(data => this.departments = data);
    this.departmentsLoaded = true
  }

  getDepartmentName(id: number){
    if (!this.departments || this.departments.length === 0) {
    return 'Loading...'; // or ''
  }

  const dept = this.departments.find(d => d.id === +id);
  return dept ? dept.name : 'Unknown';
  }

  loadCandidates() {
    this.candidateService.getCandidates().subscribe(data => this.candidates = data);
  }

  deleteCandidate(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.candidateService.deleteCandidate(id).subscribe(() => this.loadCandidates());
    }
  }
}