import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "src/app/services/events.service";
import { Events } from "src/app/models/events";

@Component({
  selector: "app-detail-event-pages",
  templateUrl: "./detail-event-pages.component.html",
  styleUrls: ["./detail-event-pages.component.css"]
})
export class DetailEventPagesComponent implements OnInit {
  date : String;
  mnth 
  months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {}

  events: Events;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id = "+ id);
    this.eventService.getEvent(id).subscribe(res => {
      this.events = res;
      console.log(res);
    const dtemp = this.events.timeEvent.split("-")[2]
    this.date = dtemp.split("T")[0]
    const mtemp = this.events.timeEvent.split("-")[1]
    this.mnth = this.months[+mtemp-1]
    console.log(this.events)
    });
  }

}
