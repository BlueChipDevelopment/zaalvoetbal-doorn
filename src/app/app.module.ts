import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { LOCALE_ID } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { PlayerDataSource } from './services/data-sources/player-data-source';
import { SheetsPlayerDataSource } from './services/data-sources/player-data-source.sheets';
import { MatchDataSource } from './services/data-sources/match-data-source';
import { SheetsMatchDataSource } from './services/data-sources/match-data-source.sheets';
import { AttendanceDataSource } from './services/data-sources/attendance-data-source';
import { SheetsAttendanceDataSource } from './services/data-sources/attendance-data-source.sheets';
import { NotificationDataSource } from './services/data-sources/notification-data-source';
import { SheetsNotificationDataSource } from './services/data-sources/notification-data-source.sheets';
import { ActiveBackendService } from './services/data-sources/active-backend.service';
import { SupabasePlayerDataSource } from './services/data-sources/player-data-source.supabase';
import { SupabaseMatchDataSource } from './services/data-sources/match-data-source.supabase';
import { SupabaseAttendanceDataSource } from './services/data-sources/attendance-data-source.supabase';
import { SupabaseNotificationDataSource } from './services/data-sources/notification-data-source.supabase';
import { PlayerNamePipe } from './pipes/player-name.pipe';

registerLocaleData(localeNl);

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    AppRoutingModule,
    AboutComponent,
    PlayerNamePipe,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production || environment.enableServiceWorker,
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    TitleCasePipe, 
    { provide: LOCALE_ID, useValue: 'nl' },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    {
      provide: PlayerDataSource,
      useFactory: (sheets: SheetsPlayerDataSource, supabase: SupabasePlayerDataSource, backend: ActiveBackendService) =>
        backend.current === 'supabase' ? supabase : sheets,
      deps: [SheetsPlayerDataSource, SupabasePlayerDataSource, ActiveBackendService],
    },
    {
      provide: MatchDataSource,
      useFactory: (sheets: SheetsMatchDataSource, supabase: SupabaseMatchDataSource, backend: ActiveBackendService) =>
        backend.current === 'supabase' ? supabase : sheets,
      deps: [SheetsMatchDataSource, SupabaseMatchDataSource, ActiveBackendService],
    },
    {
      provide: AttendanceDataSource,
      useFactory: (sheets: SheetsAttendanceDataSource, supabase: SupabaseAttendanceDataSource, backend: ActiveBackendService) =>
        backend.current === 'supabase' ? supabase : sheets,
      deps: [SheetsAttendanceDataSource, SupabaseAttendanceDataSource, ActiveBackendService],
    },
    {
      provide: NotificationDataSource,
      useFactory: (sheets: SheetsNotificationDataSource, supabase: SupabaseNotificationDataSource, backend: ActiveBackendService) =>
        backend.current === 'supabase' ? supabase : sheets,
      deps: [SheetsNotificationDataSource, SupabaseNotificationDataSource, ActiveBackendService],
    },
  ]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
