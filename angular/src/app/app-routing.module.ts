import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './component/feed/feed.component';
import { MainComponent } from './component/main/main.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  { path:'',
    component:MainComponent,
    data : {title:'Main', side: false},
    children : []},
    { path:'post',
    component:PostComponent,
    data : {title:'Post', side: false},
    children : []},
    { path:'feed',
    component:FeedComponent,
    data : {title:'Feed', side: false},
    children : []}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
