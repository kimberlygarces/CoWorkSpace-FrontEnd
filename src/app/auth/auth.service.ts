import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private baseUrl = 'http://localhost:8081'; 
  private tokenKey = 'authToken'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap((response: any) => {
          console.log('Respuesta del servidor en AuthService:', response); // Log de la respuesta del servidor
          if (response.token) {
            localStorage.setItem(this.tokenKey, response.token); 
            this.loggedIn = true; // Actualizar el estado de loggedIn
          }
        })
      );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); 
    this.loggedIn = false;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
