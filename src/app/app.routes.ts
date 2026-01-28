import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { CvTech } from './components/pages/cv-tech/cv-tech';
import { CvFinance } from './components/pages/cv-finance/cv-finance';
import { FamilySchedule } from './components/pages/family-schedule/family-schedule';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv-tech', component: CvTech },
  { path: 'cv-finance', component: CvFinance },
  {path:'family-schedule', component :FamilySchedule},
  { path: '**', redirectTo: '' }
];
