import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-event-pages",
  templateUrl: "./detail-event-pages.component.html",
  styleUrls: ["./detail-event-pages.component.css"]
})
export class DetailEventPagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cards: number[] = [1, 2, 4, 5, 6, 3];
}
