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
  userData : any = {
  };
  
  constructor(private auth: AuthService, private router: Router, private toastr : ToastrService) {}

  ngOnInit() {}

  login() {
    console.log(this.userData);
    this.auth.loginUser(this.userData).subscribe(res => {
      console.log(res);
      if(res.token != null){
          localStorage.setItem("token", res.token);
          this.toastr.success('Login Success', 'Selamat Datang');
          this.router.navigate(["/landing"]);
          setTimeout(()=>{
          window.location.reload()
          }, 2000)
      }else{
          this.toastr.error('Login Failed', 'Try Again');
          setTimeout(()=>{
          window.location.reload()
          }, 500)
      }
    });
  }
}
