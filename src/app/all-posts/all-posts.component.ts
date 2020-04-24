import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from '../blog-info.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  
  loggedIn: boolean;
  blogService: BlogInfoService;
  allPosts: Blogpost[];

  constructor(blogService: BlogInfoService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.allPosts = this.blogService.blogPosts;

    this.blogService.loggedIn.subscribe(data => this.loggedIn = data);
  }

  deleteItem(title){
    this.blogService.deletePost(title);
    this.allPosts = this.blogService.getPosts();
  }

}
