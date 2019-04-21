import { Component, OnInit } from "@angular/core";
import { Events } from "src/app/models/events";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-manage-event-pages",
  templateUrl: "./manage-event-pages.component.html",
  styleUrls: ["./manage-event-pages.component.css"]
})
export class ManageEventPagesComponent implements OnInit {
  manageEvents = [];
  constructor(private eventServ: EventsService) {}

  ngOnInit() {
    this.eventServ.manageEvent().subscribe(res => {
      this.manageEvents = res;
      console.log(this.manageEvents.length);
    });
  }

  // myevent: Events[];
  myevent: Events[] = [];

  onEventAdded(events: Events) {}

  getEvents() {
    this.eventServ.getEvents().subscribe(myevent => {
      this.myevent = myevent;
      // console.log(myevent);
    });
  }
}
