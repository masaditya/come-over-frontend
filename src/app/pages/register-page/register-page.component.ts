import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})
export class RegisterPageComponent implements OnInit {
  userData = {};
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  register() {
    console.log(this.userData);
    this.auth.registerUser(this.userData).subscribe(res => {
      console.log(res);
    });
  }
}
