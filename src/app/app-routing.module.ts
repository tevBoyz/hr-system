import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { SalaryFormComponent } from './components/salary-form/salary-form.component';
import { SalaryListComponent } from './components/salary-list/salary-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // this will be your wrapper with buttons + router-outlet
    children: [
      // Candidate routes
      { path: 'candidates', component: CandidateListComponent },
      { path: 'candidates/add', component: CandidateFormComponent },
      { path: 'candidates/edit/:id', component: CandidateFormComponent },

      // Employee routes
      { path: 'employees', component: EmployeeListComponent },
      { path: 'employees/add', component: EmployeeFormComponent },
      { path: 'employees/edit/:id', component: EmployeeFormComponent },

      // Company routes
      { path: 'companies', component: CompanyListComponent },
      { path: 'companies/add', component: CompanyFormComponent },
      { path: 'companies/edit/:id', component: CompanyFormComponent },

      // Department routes
      { path: 'departments', component: DepartmentListComponent },
      { path: 'departments/add', component: DepartmentFormComponent },
      { path: 'departments/edit/:id', component: DepartmentFormComponent },

      // Salary routes
      { path: 'salaries', component: SalaryListComponent },
      { path: 'salaries/add', component: SalaryFormComponent },
      { path: 'salaries/edit/:id', component: SalaryFormComponent },

      // Default route
      { path: '', redirectTo: 'candidates', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
