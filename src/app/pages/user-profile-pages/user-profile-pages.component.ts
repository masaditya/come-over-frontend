import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile-pages',
  templateUrl: './user-profile-pages.component.html',
  styleUrls: ['./user-profile-pages.component.css']
})
export class UserProfilePagesComponent implements OnInit {

  constructor(private authService : AuthService, private toastr : ToastrService) { }
  user = null;
  input = ""

  ngOnInit() {
    this.authService.getPayload().subscribe(res => {
      console.log(res)
      this.authService.getUser(res.subject).subscribe(user => {
        this.user = user;
        
      })
    })

  }

  setOrganizer(){
    console.log(this.input)
    this.user.organizer = this.input
    console.log(this.user)
    this.authService.setOrganizer(this.user).subscribe(result => {
          console.log(result)
          this.toastr.success("Organizer has been set", "Hello there!")
        })
  }
}
