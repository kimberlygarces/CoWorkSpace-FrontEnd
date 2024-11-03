// src/app/services/event.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/event';

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/getAllEvents`);
  }

  findByState(state: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/filterByState`, { params: { state } });
  }

  findEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/findEventById`, { params: { id: id.toString() } });
  }

  saveEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/saveEvent`, event);
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/updateEvent`, event);
  }

  deleteEvent(event: Event): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEvent`, { body: event });
  }
}
