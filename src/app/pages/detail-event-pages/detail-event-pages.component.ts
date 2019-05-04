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
    });
  }

  cards: number[] = [1, 2, 4, 5, 6, 3];
}
