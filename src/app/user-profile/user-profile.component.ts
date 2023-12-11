import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService } from '../auth-serv.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthServService, private router: Router) {}

  ngOnInit() {
    const userItem = localStorage.getItem('user');
    if (userItem) {
      const user = JSON.parse(userItem);
      this.username = user.username;
      this.password = user.password;
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
