import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, userCredentials } from '../domain/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:5066/';
  private http = inject(HttpClient);

  login(userCredentials: userCredentials): Observable<User>{
    return this.http.post<User>(this.API_URL+'api/Auth/login', userCredentials);
  }
}
