import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { Login, Register } from '../auth/auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  login(user: Login) {
    return lastValueFrom(this.http.post(`${this.baseUrl}/users/login`, {user}));
  }
  
  signUp(user: Register) {
    return lastValueFrom(this.http.post(`${this.baseUrl}/users`, {user}));
  }
}
