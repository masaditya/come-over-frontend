import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})
export class RegisterPageComponent implements OnInit {
  userData : any = {};
  constructor(private auth: AuthService, private router : Router, private toastr : ToastrService) {}

  ngOnInit() {}

  register() {
    console.log(this.userData);
    this.auth.registerUser(this.userData).subscribe(res => {
      console.log(res);
      if(res.token != null){
        localStorage.setItem("token", res.token);
        this.router.navigate(["/login"]);
        this.toastr.success('Register Success', 'Silahkan Login untuk melanjutkan');
      }else{
        this.toastr.error('Register Failed', 'Field tidak boleh kosong');
        setTimeout(()=>{
        window.location.reload()
        }, 1000)
      }
    });
  }
}
