import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RecordsRoutingModule } from './records-routing.module';
import { RecordsComponent } from './records.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { LoadingStateComponent } from '../loading-state/loading-state.component';

@NgModule({
  declarations: [RecordsComponent],
  imports: [
    CommonModule,
    RouterModule,
    RecordsRoutingModule,
    MatCardModule,
    MatIconModule,
    PageHeaderComponent,
    LoadingStateComponent,
  ],
})
export class RecordsModule {}
