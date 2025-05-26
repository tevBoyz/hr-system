import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';


// const routes: Routes = [
//   //Candidate routes
//   { path: 'candidates', component: CandidateListComponent },
//   { path: 'candidates/add', component: CandidateFormComponent },
//   { path: 'candidates/edit/:id', component: CandidateFormComponent },
//   { path: '', redirectTo: 'candidates', pathMatch: 'full' },

//   //Employee routes
//   { path: 'employees', component: EmployeeListComponent },
//   { path: 'employees/add', component: EmployeeFormComponent },
//   { path: 'employees/edit/:id', component: EmployeeFormComponent },
//   { path: '', redirectTo: 'employees', pathMatch: 'full' }
// ];

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
