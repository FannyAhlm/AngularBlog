import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from './blog-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBlog';
  blogService: BlogInfoService;
  loggedIn: boolean;

  constructor(blogService: BlogInfoService){
    this.blogService = blogService;
  }
  ngOnInit(){
    this.blogService.loggedIn.subscribe(data => this.loggedIn = data);
  }

}
