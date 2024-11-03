import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workspace } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private baseUrl = 'http://localhost:8080/workspaces';

  constructor(private http: HttpClient) { }

  findAllWorkspaces(): Observable<Workspace[]> {
    return this.http.get<Workspace[]>(`${this.baseUrl}/findAllWorkspaces`);
  }

  findByDisponibilidad(disponibilidad: string): Observable<Workspace[]> {
    return this.http.get<Workspace[]>(`${this.baseUrl}/filterByAvalaible`, { params: { disponibilidad } });
  }

  findWorkspaceById(id: number): Observable<Workspace> {
    return this.http.get<Workspace>(`${this.baseUrl}/findWorkspaceById`, { params: { id: id.toString() } });
  }

  saveWorkspace(workspace: Workspace): Observable<Workspace> {
    return this.http.post<Workspace>(`${this.baseUrl}/saveWorkspace`, workspace);
  }

  updateWorkspace(workspace: Workspace): Observable<Workspace> {
    return this.http.put<Workspace>(`${this.baseUrl}/updateWorkspace`, workspace);
  }

  deleteWorkspace(workspace: Workspace): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteWorkspace`, { body: workspace });
  }
}