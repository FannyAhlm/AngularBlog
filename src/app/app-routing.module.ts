import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AddPostComponent } from './add-post/add-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', redirectTo: '', pathMatch: 'prefix'},
  { path: 'latest', component: LatestPostsComponent },
  { path: 'all', component: AllPostsComponent },
  { path: 'addpost', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
