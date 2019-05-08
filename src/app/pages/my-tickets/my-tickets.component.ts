import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  tickets = []

  coba = "wioadwhnioboawdiboiawd"

  constructor(private eventService : EventsService) { }

  ngOnInit() {
    this.eventService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
      console.log(this.tickets);
    })
  }

}
