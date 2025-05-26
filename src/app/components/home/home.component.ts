import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public router: Router) {}

  getActiveSection(): string {
    const currentRoute = this.router.url;
    if(currentRoute.includes('/employees')){
      return 'employees';
    }
    else if(currentRoute.includes('/companies')){
      return 'companies';
    }
    else if(currentRoute.includes('/departments')){
      return 'departments';
    }
    else if(currentRoute.includes('/candidates')){
      return 'candidates';
    }
    else if(currentRoute.includes('/companies')){
      return 'companies';
    }
    else{
      return 'salaries';
    }
  }
}
