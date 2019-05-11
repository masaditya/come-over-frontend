import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Events } from "../../models/events";
import { EventsService } from 'src/app/services/events.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-create-event-pages",
  templateUrl: "./create-event-pages.component.html",
  styleUrls: ["./create-event-pages.component.css"]
})
export class CreateEventPagesComponent implements OnInit {
  @Output() createdEvent = new EventEmitter<Events>();
  poster = null;
  urlPoster = null;
  name = "";
  location = "";
  category = "";
  description = "";
  date = "";
  organizer = ""

  constructor(private eventService: EventsService, private authService : AuthService) {}

  ngOnInit() {
    this.authService.getPayload().subscribe(res => {
      this.organizer = res.subject
      console.log(this.organizer);
    })

  }

  addEvent() {
    const fd = new FormData();
    fd.append('poster',this.poster, this.poster.name);
    this.eventService.postPoster(fd).subscribe(url  => {
      this.urlPoster = url;
      console.log(this.urlPoster)
      this.submitNewEvent(this.urlPoster.url)
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
    newEvent.organizerEvent = this.organizer

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
