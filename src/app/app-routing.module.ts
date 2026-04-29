import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'klassement',
    title: 'Klassement',
    loadComponent: () =>
      import('./components/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent),
  },
  {
    path: 'score',
    title: 'Score invoeren',
    loadComponent: () =>
      import('./components/score/score.component').then(m => m.ScoreComponent),
  },
  {
    path: 'team-generator',
    title: 'Team Generator',
    loadComponent: () =>
      import('./components/team-generator/team-generator.component').then(m => m.TeamGeneratorComponent),
  },
  {
    path: 'aanwezigheid',
    title: 'Aanwezigheid',
    loadComponent: () =>
      import('./components/attendance/attendance.component').then(m => m.AttendanceComponent),
  },
  {
    path: 'kalender',
    title: 'Kalender',
    loadComponent: () =>
      import('./components/kalender/kalender.component').then(m => m.KalenderComponent),
  },
  {
    path: 'wedstrijden',
    title: 'Wedstrijden',
    loadComponent: () =>
      import('./components/wedstrijden/wedstrijden.component').then(m => m.WedstrijdenComponent),
  },
  {
    path: 'opstelling',
    title: 'Opstelling',
    loadComponent: () =>
      import('./components/opstelling/opstelling.component').then(m => m.OpstellingComponent),
  },
  // About + Login blijven eager: klein, worden vroeg getoond.
  { path: 'about', title: 'Over', component: AboutComponent },
  { path: 'login', title: 'Inloggen', component: LoginComponent },
  {
    path: 'beheer',
    title: 'Beheer',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'speler/:id',
    loadChildren: () =>
      import('./components/speler-profiel/speler-profiel.module').then(m => m.SpelerProfielModule),
  },
  {
    path: 'records',
    title: 'Records',
    loadChildren: () => import('./components/records/records.module').then(m => m.RecordsModule),
  },
  { path: '', redirectTo: '/klassement', pathMatch: 'full' },
  { path: '**', redirectTo: '/klassement' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
