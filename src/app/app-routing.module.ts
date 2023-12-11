import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayMakerComponent } from './play-maker/play-maker.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component'; 
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playmaker', component: PlayMakerComponent },
  { path: 'slides', component: AboutPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
