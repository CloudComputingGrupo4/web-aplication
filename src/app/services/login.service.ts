// src/app/service/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../env/env';
import { LoginRequest } from '../models/loginRequest.interface';
import { LoginResponse } from '../models/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${env.baseURL}auth/login`;

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, loginRequest);
  }
}
