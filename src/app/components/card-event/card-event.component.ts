import { Component, OnInit, Input } from "@angular/core";
import { Events } from "src/app/models/events";

@Component({
  selector: "app-card-event",
  templateUrl: "./card-event.component.html",
  styleUrls: ["./card-event.component.css"]
})
export class CardEventComponent implements OnInit {
  @Input() perEvent: Events;
  date : String;
  months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
  constructor() {}

  ngOnInit() {
    const dtemp = this.perEvent.timeEvent.split("-")[2]
    this.date = dtemp.split("T")[0]
    const mtemp = this.perEvent.timeEvent.split("-")[1]
    console.log(mtemp)
    console.log(this.perEvent)
  }
}
