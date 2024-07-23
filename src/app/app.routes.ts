import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard page',
      },
];
