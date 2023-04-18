import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';


const ROUTES = [
  { path: 'login', component :LoginComponent},
  { path: 'signup', component :SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    MatIconModule
  
 
  ]
})
export class AuthModule { }
