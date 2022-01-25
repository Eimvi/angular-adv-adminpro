import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { NotPageFoundComponent } from './pages/notpagefound/notpagefound.component';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
