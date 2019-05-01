import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "http://localhost:3000/user";

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this.url + "/signup", user);
  }

  loginUser(user) {
    return this.http.post<any>(this.url + "/login", user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this.router.navigate(["/landing"]);
  }
}
