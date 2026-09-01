import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerNamePipe } from '../../pipes/player-name.pipe';
import { LoadingStateComponent } from '../loading-state/loading-state.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSpelersComponent } from './admin-spelers/admin-spelers.component';
import { AdminWedstrijdenComponent } from './admin-wedstrijden/admin-wedstrijden.component';
import { SpelerDialogComponent } from './admin-spelers/speler-dialog/speler-dialog.component';
import { WedstrijdDialogComponent } from './admin-wedstrijden/wedstrijd-dialog/wedstrijd-dialog.component';
import { AdminNotificatiesComponent } from './admin-notificaties/admin-notificaties.component';
import { TestBroadcastDialogComponent } from './admin-notificaties/test-broadcast-dialog.component';
import { AdminSeizoensbeslissingenComponent } from './admin-seizoensbeslissingen/admin-seizoensbeslissingen.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminSpelersComponent,
    AdminWedstrijdenComponent,
    SpelerDialogComponent,
    WedstrijdDialogComponent,
    AdminNotificatiesComponent,
    TestBroadcastDialogComponent,
    AdminSeizoensbeslissingenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    PlayerNamePipe,
    LoadingStateComponent,
    ConfirmDialogComponent
  ]
})
export class AdminModule { }
