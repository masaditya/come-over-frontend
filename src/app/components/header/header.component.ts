import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() isLogin: boolean;
  isLoggedIn: boolean;
  isNavbarCollapsed=true;
  user : User;

  constructor(private auth: AuthService, private toastr: ToastrService, private route : Router) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
    if(this.isLoggedIn){
      this.auth.getPayload().subscribe(payload => {
        this.auth.getUser(payload.subject).subscribe(user => {
          this.user = user
          console.log(this.user)
        })
      })
    }
  }

  logout() {
    this.auth.logoutUser();
    this.toastr.success('Logout Success', 'Sampai Jumpa');
    this.route.navigate(['/landing'])
    setTimeout(()=>{
      window.location.reload()
    }, 2000)
    
  }

  
}
