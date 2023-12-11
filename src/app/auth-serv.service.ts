import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  authChange = new EventEmitter<boolean>();

  login(user: { username: string; password: string }) {
    localStorage.setItem('user', JSON.stringify(user));
    this.authChange.emit(true);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
    this.authChange.emit(false);
  }
}
