import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-organizer',
  templateUrl: './login-organizer.component.html',
  styleUrls: ['./login-organizer.component.css']
})
export class LoginOrganizerComponent implements OnInit {
userData = {};
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log(this.userData);
    this.auth.loginUser(this.userData).subscribe(res => {
      console.log(res);
      localStorage.setItem("organizer", res.token);
      this.router.navigate(["/myevent/manage"]);
    });
  }
}
