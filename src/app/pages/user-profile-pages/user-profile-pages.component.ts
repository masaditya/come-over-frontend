import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile-pages',
  templateUrl: './user-profile-pages.component.html',
  styleUrls: ['./user-profile-pages.component.css']
})
export class UserProfilePagesComponent implements OnInit {

  constructor(private authService : AuthService) { }
  user = null;

  ngOnInit() {
    this.authService.getPayload().subscribe(res => {
      console.log(res)
      this.authService.getUser(res.subject).subscribe(user => {
        this.user = user;
        console.log(this.user)
      })
    })

  }

}
