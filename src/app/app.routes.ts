import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CvTech } from './pages/cv-tech/cv-tech';
import { CvFinance } from './pages/cv-finance/cv-finance';
import { FamilySchedule } from './pages/family-schedule/family-schedule';
import { UpgradeFood } from './pages/upgrade-food/upgrade-food';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cv-tech', component: CvTech },
  { path: 'cv-finance', component: CvFinance },
  { path: 'family-schedule', component: FamilySchedule },
  { path: 'upgrade-food', component: UpgradeFood },
  { path: '**', redirectTo: '' }
];

