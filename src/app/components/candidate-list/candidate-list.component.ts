import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.loadCandidates();
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