import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/candidate.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html'
})
export class CandidateFormComponent implements OnInit {
  candidate: Candidate = { id: 0, firstName: '', lastName: '', email: '', phone: '', resumeUrl: '' };
  isEdit = false;

  constructor(
    private service: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getCandidate(+id).subscribe(data => this.candidate = data);
    }
  }

  
  onSubmit() {
  const request = this.isEdit
    ? this.service.updateCandidate(this.candidate)
    : this.service.addCandidate({ ...this.candidate, id: undefined }); // ✅ Force ID to be generated

  request.subscribe(() => this.router.navigate(['/candidates']));
}
}
