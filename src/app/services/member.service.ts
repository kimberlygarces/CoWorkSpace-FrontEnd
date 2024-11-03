import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = 'http://localhost:8081/member';

  constructor(private http: HttpClient) { }

  findAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/findAllMembers`);
  }

  findMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/findMemberById`, { params: { id: id.toString() } });
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}/createMember`, member);
  }

  updateMember(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/updateMember`, member);
  }

  deleteMember(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteMember/${id}`, { responseType: 'text' as 'json' });
  }
}
