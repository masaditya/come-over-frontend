import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-pages",
  templateUrl: "./landing-pages.component.html",
  styleUrls: ["./landing-pages.component.css"]
})
export class LandingPagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cards: number[] = [1, 2, 4, 5, 6, 3];
}
