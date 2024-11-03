// src/app/services/resource.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = 'http://localhost:8080/resource';

  constructor(private http: HttpClient) { }

  findAllResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.baseUrl}/findAllResources`);
  }

  findResourceById(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.baseUrl}/findResourceById`, { params: { id: id.toString() } });
  }

  createResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(`${this.baseUrl}/createResource`, resource);
  }

  updateResource(resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.baseUrl}/updateResource`, resource);
  }

  deleteResource(resource: Resource): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteResource`, { body: resource });
  }
}