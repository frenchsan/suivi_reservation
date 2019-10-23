import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {


  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });


  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}



  public onSubmit() {
    console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);

  }
}
