import { Component, OnInit } from '@angular/core';
import { BlogInfoService } from '../blog-info.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  blogService: BlogInfoService;
  loggedIn: boolean;

  success: boolean = false;

  constructor(blogService: BlogInfoService){
    this.blogService = blogService;
  }
  ngOnInit(){
    this.blogService.loggedIn.subscribe(data => this.loggedIn = data);
  }

  sendPost(form){
    if(form.author.length == 0){
      form.author = "Anonymous";
    }
    this.blogService.addPost(form.title, form.content, form.author, form.time);
    this.success = true;
    setTimeout(()=> {
      this.success = false;
    }, 3000);
  }
  

}
