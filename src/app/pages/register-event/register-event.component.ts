import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';
// import {Ticket} from 'src/app/models/ticket';
import { AuthService } from 'src/app/services/auth.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private authService : AuthService,
private router : Router

  ) {}

  events: Events;
  userData = null;

  // userData.email = "";

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id = "+ id);
    this.eventService.getEvent(id).subscribe(res => {
      this.events = res;
      console.log(res);
      this.getUser();
    });
  }

  getUser(){
this.authService.getPayload().subscribe(resid => {
      console.log("resid :"+resid.subject)
      this.authService.getUser(resid.subject).subscribe(userdata => {
        this.userData = userdata
        console.log(this.userData);
      })
    })
  }

  newTicket(){
    let ticket : Ticket = new Ticket();
    ticket.eventTicket = this.events._id
    ticket.userTicket = this.userData._id
    ticket.category = this.events.categoryEvent
    ticket.price = 20
  
    this.eventService.newTicket(ticket).subscribe(newtick => {
      console.log(newtick)
      this.router.navigate(["/landing"]);
    })
  }

}
