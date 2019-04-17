import { Injectable } from "@angular/core";

// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

// import { Hero } from './hero';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class EventsService {
  private eventUrl = "api/heroes";

  constructor(private http: HttpClient) {}

  // Get Event
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl).pipe(
      tap(_ => this.log("fetched Events")),
      catchError(this.handleError<Event[]>("getEvents", []))
    );
  }

  // Get event by ID but undifined
  getEventNo404<Data>(id: number): Observable<Event> {
    const url = `${this.eventUrl}/?id=${id}`;
    return this.http.get<Event[]>(url).pipe(
      map(events => events[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} event id=${id}`);
      }),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  // Get event by ID
  getEvent(id: number): Observable<Event> {
    const url = `${this.eventUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Event[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Event[]>(`${this.eventUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found event matching "${term}"`)),
      catchError(this.handleError<Event[]>("searchHeroes", []))
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
