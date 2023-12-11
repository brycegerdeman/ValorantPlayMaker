import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService } from '../auth-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthServService, private router: Router) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password });
    this.router.navigate(['/']); // Navigate to home after login
  }
}