import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPagesComponent } from '../pages/login-pages/login-pages.component';
import { LandingPagesComponent } from '../pages/landing-pages/landing-pages.component';

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingPagesComponent },
  { path: "login", component: LoginPagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
