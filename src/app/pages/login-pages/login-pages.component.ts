import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login-pages",
  templateUrl: "./login-pages.component.html",
  styleUrls: ["./login-pages.component.css"]
})
export class LoginPagesComponent implements OnInit {
  userData = {};
  constructor(private auth: AuthService, private router: Router, private toastr : ToastrService) {}

  ngOnInit() {}

  login() {
    console.log(this.userData);
    this.auth.loginUser(this.userData).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", res.token);
      this.toastr.success('Login Success', 'Selamat Datang');
      this.router.navigate(["/"]);
    });
  }
}
