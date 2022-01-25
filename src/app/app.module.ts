import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotPageFoundComponent } from './pages/notpagefound/notpagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotPageFoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    GraphicComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
