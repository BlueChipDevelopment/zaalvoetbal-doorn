import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'klassement',
    loadComponent: () =>
      import('./components/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent),
  },
  {
    path: 'score',
    loadComponent: () =>
      import('./components/score/score.component').then(m => m.ScoreComponent),
  },
  {
    path: 'team-generator',
    loadComponent: () =>
      import('./components/team-generator/team-generator.component').then(m => m.TeamGeneratorComponent),
  },
  {
    path: 'aanwezigheid',
    loadComponent: () =>
      import('./components/attendance/attendance.component').then(m => m.AttendanceComponent),
  },
  {
    path: 'kalender',
    loadComponent: () =>
      import('./components/kalender/kalender.component').then(m => m.KalenderComponent),
  },
  {
    path: 'wedstrijden',
    loadComponent: () =>
      import('./components/wedstrijden/wedstrijden.component').then(m => m.WedstrijdenComponent),
  },
  {
    path: 'opstelling',
    loadComponent: () =>
      import('./components/opstelling/opstelling.component').then(m => m.OpstellingComponent),
  },
  // About + Login blijven eager: klein, worden vroeg getoond.
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'beheer',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'speler/:id',
    loadChildren: () =>
      import('./components/speler-profiel/speler-profiel.module').then(m => m.SpelerProfielModule),
  },
  { path: '', redirectTo: '/klassement', pathMatch: 'full' },
  { path: '**', redirectTo: '/klassement' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
