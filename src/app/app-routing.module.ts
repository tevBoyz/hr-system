import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';


const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidates/add', component: CandidateFormComponent },
  { path: 'candidates/edit/:id', component: CandidateFormComponent },
  { path: '', redirectTo: 'candidates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
