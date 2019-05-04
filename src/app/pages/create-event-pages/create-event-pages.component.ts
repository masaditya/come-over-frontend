import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Events } from "../../models/events";
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: "app-create-event-pages",
  templateUrl: "./create-event-pages.component.html",
  styleUrls: ["./create-event-pages.component.css"]
})
export class CreateEventPagesComponent implements OnInit {
  @Output() createdEvent = new EventEmitter<Events>();
  poster = null;
  urlPoster = "";
  name = "";
  location = "";
  category = "";
  description = "";
  date = "";

  constructor(private eventService: EventsService) {}

  ngOnInit() {}

  addEvent() {
    const fd = new FormData();
    fd.append('poster',this.poster, this.poster.name);
    this.eventService.postPoster(fd).subscribe(url => {
      this.urlPoster = url.url;
      console.log(this.urlPoster)
      this.submitNewEvent(this.urlPoster)
    })
  }

  submitNewEvent(url){
    let newEvent: Events = new Events();

    newEvent.nameEvent = this.name;
    newEvent.timeEvent = this.date;
    newEvent.posterEvent = url
    newEvent.locationEvent = this.location;
    newEvent.categoryEvent = this.category;
    newEvent.descEvent = this.description;

    console.log(newEvent);
    this.eventService.postEvent(newEvent).subscribe(res => {
      console.log(res)
    })
    // this.createdEvent.emit(newEvent);
    this.name = "";
    this.date = "";
    this.description = "";
    this.location = "";
    this.category = "";
  }



  onFileSelected(event){
    this.poster = <File>event.target.files[0];
  }
}
