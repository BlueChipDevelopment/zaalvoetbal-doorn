import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpelerProfielComponent } from './speler-profiel.component';

const routes: Routes = [{ path: '', component: SpelerProfielComponent }];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SpelerProfielRoutingModule {}
