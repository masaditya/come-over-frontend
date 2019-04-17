import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Events } from "../../models/events";

@Component({
  selector: "app-create-event-pages",
  templateUrl: "./create-event-pages.component.html",
  styleUrls: ["./create-event-pages.component.css"]
})
export class CreateEventPagesComponent implements OnInit {
  @Output() createdEvent = new EventEmitter<Events>();
  name = "name";
  location = "loc";
  category = "cat";
  description = "desc";
  date = "";

  constructor() {}

  ngOnInit() {}

  addEvent() {
    let newEvent: Events = new Events();

    newEvent.nameEvent = this.name;
    newEvent.timeEvent = this.date;
    newEvent.locationEvent = this.location;
    newEvent.categoryEvent = this.category;
    newEvent.descEvent = this.description;

    console.log(newEvent);

    this.createdEvent.emit(newEvent);
    this.name = "";
    this.date = "";
    this.description = "";
    this.location = "";
    this.category = "";
  }
}
