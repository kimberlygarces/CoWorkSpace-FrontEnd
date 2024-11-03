// src/app/services/reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8080/reservation';

  constructor(private http: HttpClient) { }

  findAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/findAllReservation`);
  }

  findReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/findReservationById`, { params: { id: id.toString() } });
  }

  saveReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/saveReservation`, reservation);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/updateReservation`, reservation);
  }

  deleteReservation(reservation: Reservation): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteReservation`, { body: reservation });
  }
}