import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }

  deleteCompany(id: number) {
    const confirm = window.confirm("Are you sure?");
    if(confirm){
      this.companyService.deleteCompany(id).subscribe(() => this.loadCompanies());
    }
  }
}