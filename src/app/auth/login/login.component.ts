import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginPayload} from '../login-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  subscription: Subscription;
data :boolean;
  loginForm: FormGroup;
 loginPayload: LoginPayload;
 public dataList$: Observable<LoginPayload[]>;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }
 
  ngOnInit() {
    
  }

  onSubmit() {
    debugger;
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;


    this.authService.login(this.loginPayload).subscribe(data => {
      this.data = data;
     // if (data) {
       // console.log('login success');
       //this.router.navigateByUrl('/home');
      //} else {
       // console.log('Login failed');
     // }
    });
  }



}
