import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {
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

}
