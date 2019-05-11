import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() isLogin: boolean;
  isLoggedIn: boolean;
  isNavbarCollapsed=true;

  constructor(private auth: AuthService, private toastr: ToastrService, private route : Router) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.loggedIn();
    console.log(this.isLogin);
  }

  logout() {
    this.auth.logoutUser();
    this.toastr.success('Logout Success', 'Sampai Jumpa');
    this.route.navigate(['/'])
  }

  
}
