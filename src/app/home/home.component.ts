import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from '../blog-info.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogService: BlogInfoService;
  homePost: Blogpost;

  constructor(blogService: BlogInfoService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.homePost = this.blogService.blogPosts[0];
  }
  
}
