import { Component, OnInit } from "@angular/core";
import { Events } from "src/app/models/events";
import { EventsService } from "src/app/services/events.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-event-pages",
  templateUrl: "./manage-event-pages.component.html",
  styleUrls: ["./manage-event-pages.component.css"]
})
export class ManageEventPagesComponent implements OnInit {
  manageEvents = [];
  page = 4;

  date : String;
  mnth 
  months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];



  constructor(private eventServ: EventsService, private router: Router) {}

  ngOnInit() {
    this.eventServ.manageEvent().subscribe(
      res => {
        this.manageEvents = res;
        console.log(this.manageEvents.length);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(["/login"]);
          }
        }
      }
    );
  }

  // myevent: Events[];
  myevent: Events[] = [];

  onEventAdded(events: Events) {
    console.log(event)
    // this.eventServ.postEvent(event);
  }

  getEvents() {
    this.eventServ.getEvents().subscribe(myevent => {
      this.myevent = myevent;
      // console.log(myevent);
    });
  }
}
