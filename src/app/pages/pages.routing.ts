import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graphic', component: GraphicComponent },
  ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
