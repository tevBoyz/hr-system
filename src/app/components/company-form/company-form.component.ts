import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company-service.service';
import { Company } from '../../models/company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent implements OnInit {
  company: Company = { id: 0, name: '',location:'', establishedYear: 0 };
  isEdit = false;

  constructor(
    private service: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getCompany(+id).subscribe(data => this.company = data);
    }
  }
  
  onSubmit() {
  if(this.company.name === '' || this.company.location === ''){
      this.snackBar.open('Missing field! No entry made.', 'Close', { duration: 3000 });
          this.router.navigate(['/companies']);
    }
    else
  {const request = this.isEdit
    ? this.service.updateCompany(this.company)
    : this.service.addCompany({ ...this.company, id: undefined }); // Force ID to be generated

  request.subscribe(() => this.router.navigate(['/companies']));}
}
}