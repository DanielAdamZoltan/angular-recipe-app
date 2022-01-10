import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent,
    // ResetPasswordComponent
  
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
