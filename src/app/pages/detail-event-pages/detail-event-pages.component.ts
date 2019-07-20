import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "src/app/services/events.service";
import { Events } from "src/app/models/events";
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-detail-event-pages",
  templateUrl: "./detail-event-pages.component.html",
  styleUrls: ["./detail-event-pages.component.css"]
})
export class DetailEventPagesComponent implements OnInit {
  date : String;
  user : User;
  mnth 
  months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private auth : AuthService
  ) {}

  events: Events;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id = "+ id);
    this.eventService.getEvent(id).subscribe(res => {
      this.events = res;
      // console.log(res);
      this.auth.getUser(this.events.organizerEvent).subscribe(user => {
      this.user = user
      console.log(this.user)
    })
    const dtemp = this.events.timeEvent.split("-")[2]
    this.date = dtemp.split("T")[0]
    const mtemp = this.events.timeEvent.split("-")[1]
    this.mnth = this.months[+mtemp-1]
    // console.log(this.events)
    
    });
  }

}
