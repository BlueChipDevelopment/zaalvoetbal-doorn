import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSpelersComponent } from './admin-spelers/admin-spelers.component';
import { AdminWedstrijdenComponent } from './admin-wedstrijden/admin-wedstrijden.component';
import { SpelerDialogComponent } from './admin-spelers/speler-dialog/speler-dialog.component';
import { WedstrijdDialogComponent } from './admin-wedstrijden/wedstrijd-dialog/wedstrijd-dialog.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminSpelersComponent,
    AdminWedstrijdenComponent,
    SpelerDialogComponent,
    WedstrijdDialogComponent
  ],
  imports: [
    CommonModule,
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
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }
