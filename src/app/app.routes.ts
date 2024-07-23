import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'App page',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home page',
      },
];
