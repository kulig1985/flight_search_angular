import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './component/feed/feed.component';
import { MainComponent } from './component/main/main.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  { path:'main',component:MainComponent},
  { path:'post', component:PostComponent },
  { path:'', component:FeedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
