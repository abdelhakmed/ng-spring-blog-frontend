import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {AddPostService} from '../add-post.service';
import {Observable} from 'rxjs';
import {PostPayload} from '../add-post/post-payload';
import { LoginPayload } from '../auth/login-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input() loginPayload: LoginPayload;


  posts: Observable<Array<PostPayload>>;
  constructor(private postService: AddPostService) { }

  ngOnInit() {
    debugger;
    if(this.loginPayload && this.loginPayload.username){
      this.posts = this.postService.getPostsByusername(this.loginPayload.username);
    }
    

  }
  deletePost(idPost: any) {
    this.postService.deletePost(idPost, this.loginPayload.username).subscribe(data => {
      this.posts = this.postService.getPostsByusername(this.loginPayload.username);
     
    }, error => {
      console.log('Failure Response');
    })




  }
}
