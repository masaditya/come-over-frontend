import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  canCreate():boolean{
    if(this.auth.isOrganizer()){
      return true;
    }else{
      this.router.navigate(["/organizer/login"])
      return false;
    }
  }
}
