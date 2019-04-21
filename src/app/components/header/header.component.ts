import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() isLogin: boolean;
  isLoggedIn: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
    console.log(this.isLogin);
  }

  logout() {
    this.auth.logoutUser();
  }
}
