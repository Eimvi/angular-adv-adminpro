import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routing Module
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotPageFoundComponent } from './pages/notpagefound/notpagefound.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
