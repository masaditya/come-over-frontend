import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "come-over";
  loggedIn: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
  }
}
