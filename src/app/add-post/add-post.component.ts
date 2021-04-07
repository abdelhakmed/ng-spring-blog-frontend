import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostPayload} from './post-payload';
import {AddPostService} from '../add-post.service';
import {Router} from '@angular/router';
import { LoginPayload } from '../auth/login-payload';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  message:string;
  subscription: Subscription;
  private _loginPayload:LoginPayload[] = [];


  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');
  today: number = Date.now();
  post :boolean;
  loginPayload: () => LoginPayload[];
  constructor(private addpostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: '',
      updatedOn :''

    }
  }

  ngOnInit() {
    debugger;
    //this.loginPayload = this.dataService.getLoginPayload;
    this.dataService.dataList.subscribe(result => {
     console.log(result);// this set's the username to the default observable value
    });
  }

  addPost() {
    debugger;
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;

   // var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();

    this.addpostService.addPost(this.postPayload).subscribe(data => {
    this.post= true;
    }, error => {
      console.log('Failure Response');
    })
  }

  
}
