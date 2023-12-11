import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService } from '../auth-serv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  private authSubscription: Subscription | null = null;

  constructor(private authService: AuthServService, private router: Router ) {
    this.loggedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.loggedIn = authStatus;
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  isPlaymakerPage(): boolean {
    return this.router.url.includes('/playmaker');
  }
  
  onLogin() {
    this.router.navigate(['/login']);
  }

  navigateToProfile() {
    this.router.navigate(['/user-profile']);
  }

}


