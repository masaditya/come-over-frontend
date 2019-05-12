import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})
export class RegisterPageComponent implements OnInit {
  userData : any = {};
  constructor(private auth: AuthService, private router : Router) {}

  ngOnInit() {}

  register() {
    console.log(this.userData);
    this.auth.registerUser(this.userData).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", res.token);
      this.router.navigate(["/myevent/manage"]);
    });
  }
}
