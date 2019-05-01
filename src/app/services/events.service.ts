import { Injectable } from "@angular/core";

// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Events } from "../models/events";

// import { Hero } from './hero';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient) {}
  private EventsUrl = "http://192.168.100.22:3000";
  private url = "http://192.168.100.22:3000/api";

  landingEvents() {
    return this.http.get<any>(this.EventsUrl + "/events");
  }

  manageEvent() {
    return this.http.get<any>(this.EventsUrl + "/events");
    // return this.http.get<any>(this.url + "/special");
  }

  // Get Event
  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.EventsUrl).pipe(
      tap(_ => this.log("fetched Events")),
      catchError(this.handleError<Events[]>("getEvents", []))
    );
  }

  // Get Events by ID but undifined
  getEventsNo404<Data>(id: number): Observable<Events> {
    const url = `${this.EventsUrl}/?id=${id}`;
    return this.http.get<Events[]>(url).pipe(
      map(Eventss => Eventss[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} Events id=${id}`);
      }),
      catchError(this.handleError<Events>(`getEvents id=${id}`))
    );
  }

  // Get Events by ID
  getEvent(id: String): Observable<Events> {
    const url = `${this.EventsUrl}/events/${id}`;
    return this.http.get<Events>(url).pipe(
      tap(_ => this.log(`fetched Events id=${id}`)),
      catchError(this.handleError<Events>(`getEvents id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Events[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Events[]>(`${this.EventsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Events matching "${term}"`)),
      catchError(this.handleError<Events[]>("searchHeroes", []))
    );
  }

  // Helper
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
