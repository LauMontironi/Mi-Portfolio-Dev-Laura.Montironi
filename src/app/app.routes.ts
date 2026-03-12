import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) 
  },
  { 
    path: 'cv-tech', 
    loadComponent: () => import('./pages/cv-tech/cv-tech').then(m => m.CvTech) 
  },
  { 
    path: 'cv-finance', 
    loadComponent: () => import('./pages/cv-finance/cv-finance').then(m => m.CvFinance) 
  },
  { 
    path: 'family-schedule', 
    loadComponent: () => import('./pages/family-schedule/family-schedule').then(m => m.FamilySchedule) 
  },
  { 
    path: 'upgrade-food', 
    loadComponent: () => import('./pages/upgrade-food/upgrade-food').then(m => m.UpgradeFood) 
  },
  { 
    path: 'saas-cursos-online', 
    loadComponent: () => import('./pages/saas-cursos-online/saas-cursos-online').then(m => m.SaasCursosOnline) 
  },
  { path: '**', redirectTo: '' }
];
