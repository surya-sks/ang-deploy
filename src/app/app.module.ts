import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
RouterModule,
RouterOutlet


  ]
})
export class AppModule { }
