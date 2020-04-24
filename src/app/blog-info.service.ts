import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blogpost } from './blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogInfoService {

  constructor() { }

  private loggedInState = new BehaviorSubject<boolean>(false);
  public loggedIn = this.loggedInState.asObservable();

  blogPosts: Blogpost[] = [
    {
      title: 'How to tame a guy',
      content: 'For the longest of times, girl really thought that guys could be tamed. But the truth was, they never could.',
      author: "Wild Girl Interrupted",
      timeToRead: 2
    },
    {
      title: 'What would Fanny do?',
      content: "To be fair, that's a really dumb question. Even Fanny doesn't know the answer to that. During any. Given. Moment.",
      author: "Fanny Ahlm",
      timeToRead: 3
    },
    {
      title: 'Some other dumb shit',
      content: 'To be fair, the girl could have spent hours on writing the perfect blog posts. But the sad truth was, she was tired. Real tired. And just wanted to throw some bullshit together so that she, for once, could finish an assignment.',
      author: "Random Tired Girl",
      timeToRead: 4
    },
    {
      title: 'Next thing you know',
      content: 'After several nights and days of quarantine, the girl had enough. The subject of observables just HAD to be learned. Not because of the boredom, but because the horrible anxiety the girl got at nights when needing to sleep, and the unknowing of the  observables, haunted her. ',
      author: "Same Tired Girl",
      timeToRead: 5
    },
    {
      title: 'Instant repeater',
      content: 'How many songs do we need to have on repeat to realize, that the magic is not simply only in the words we sing, but in the love our mind chose to give them.',
      author: "Dreaming Tired Girl",
      timeToRead: 2
    },
    {
      title: 'The Unwanted Hero',
      content: 'This post was never wanted. Not really appreciated. But it did what it was supposed to do. Help the girl see if her code was working. And sometimes just knowing that that one is being helpful, is all that a lonesome hero would need.',
      author: "The Left Out Blogpost",
      timeToRead: 2
    }];

    latestBlogPosts: Blogpost[] = this.blogPosts.slice(0,5);

    loginUser(): void {
     this.loggedInState.next(!this.loggedInState.value);
    }
    getPosts(){
      return this.blogPosts;
    }
    addPost(title:string, content:string, author:string, time:number){
      let newPost:Blogpost = {
        title: title,
        content: content,
        author: author,
        timeToRead: time
      }
      this.blogPosts.unshift(newPost);
      this.latestBlogPosts = this.blogPosts.slice(0,5);
    }
    deletePost(title:string){
      this.blogPosts = this.blogPosts.filter(post => post.title != title);
      this.latestBlogPosts = this.blogPosts.slice(0,5);

    }
}
