import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from '../blog-info.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  blogService: BlogInfoService;
  loggedIn: boolean;

  constructor(blogService: BlogInfoService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.blogService.loggedIn.subscribe( data => this.loggedIn = data);
  }
  loginUser(){
    this.blogService.loginUser();
  }
}
