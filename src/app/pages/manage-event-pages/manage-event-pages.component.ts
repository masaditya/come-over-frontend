import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-event-pages",
  templateUrl: "./manage-event-pages.component.html",
  styleUrls: ["./manage-event-pages.component.css"]
})
export class ManageEventPagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  myevent: number[] = [1, 2, 3, 4, 5, 6];
}
