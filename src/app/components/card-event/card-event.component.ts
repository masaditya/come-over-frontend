import { Component, OnInit, Input } from "@angular/core";
import { Events } from "src/app/models/events";

@Component({
  selector: "app-card-event",
  templateUrl: "./card-event.component.html",
  styleUrls: ["./card-event.component.css"]
})
export class CardEventComponent implements OnInit {
  @Input() perEvent: Events;
  constructor() {}

  ngOnInit() {}
}
