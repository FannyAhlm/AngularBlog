import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from '../blog-info.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  blogService: BlogInfoService;
  latestPosts: Blogpost[];

  constructor(blogService: BlogInfoService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.latestPosts = this.blogService.latestBlogPosts;
  }
}
