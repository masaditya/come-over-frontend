import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login-pages",
  templateUrl: "./login-pages.component.html",
  styleUrls: ["./login-pages.component.css"]
})
export class LoginPagesComponent implements OnInit {
  userData = {};
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    console.log(this.userData);
    this.auth.loginUser(this.userData).subscribe(res => {
      console.log(res);
    });
  }
}
