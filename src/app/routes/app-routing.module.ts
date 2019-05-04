import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPagesComponent } from "../pages/login-pages/login-pages.component";
import { LandingPagesComponent } from "../pages/landing-pages/landing-pages.component";
import { DetailEventPagesComponent } from "../pages/detail-event-pages/detail-event-pages.component";
import { ManageEventPagesComponent } from "../pages/manage-event-pages/manage-event-pages.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";
import { AuthGuard } from "../auth.guard";
import { UserProfilePagesComponent } from '../pages/user-profile-pages/user-profile-pages.component';

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingPagesComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "login", component: LoginPagesComponent },
  { path: "events/:id", component: DetailEventPagesComponent },
  {
    path: "myevent/manage",
    component: ManageEventPagesComponent,
    canActivate: [AuthGuard]
  },
  {path : "profile",
   component: UserProfilePagesComponent,
   canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
