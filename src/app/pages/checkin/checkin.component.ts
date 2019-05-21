import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private eventService : EventsService, private route : ActivatedRoute) { }

  users = []
  tickets = []
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id = "+ id);
    this.eventService.getUserListEvent(id).subscribe(res => {
      res.map(user => {
        this.users.push(user.userTicket)
        this.tickets.push(user.status)
        
      })
      console.log("jumlah ticket :"+this.users.length)
    })
  }

  setAttend(tick){
    this.eventService.setAttend(tick).subscribe(res => {
      console.log(res);
    })
  }


}
