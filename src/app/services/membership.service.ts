// src/app/services/membership.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membership } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private baseUrl = 'http://localhost:8080/membership';

  constructor(private http: HttpClient) { }

  findAllMembership(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.baseUrl}/findAllMembership`);
  }

  findMembershipById(id: number): Observable<Membership> {
    return this.http.get<Membership>(`${this.baseUrl}/findMembershipById`, { params: { id: id.toString() } });
  }

  createMembership(membership: Membership): Observable<Membership> {
    return this.http.post<Membership>(`${this.baseUrl}/createMembership`, membership);
  }

  updateMembership(membership: Membership): Observable<Membership> {
    return this.http.put<Membership>(`${this.baseUrl}/updateMembership`, membership);
  }

  deleteMembership(membership: Membership): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteMembership`, { body: membership });
  }
}