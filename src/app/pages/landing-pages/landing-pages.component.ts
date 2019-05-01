import { Component, OnInit } from "@angular/core";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-landing-pages",
  templateUrl: "./landing-pages.component.html",
  styleUrls: ["./landing-pages.component.css"]
})
export class LandingPagesComponent implements OnInit {
  events = [];
  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.eventService.landingEvents().subscribe(res => {
      this.events = res.slice(0, 9);
      console.log(this.events.length);
    });
  }
}
