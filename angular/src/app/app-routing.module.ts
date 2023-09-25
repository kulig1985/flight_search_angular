import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './component/feed/feed.component';
import { MainComponent } from './component/main/main.component';
import { PostComponent } from './component/post/post.component';
import { TradeComponent } from './component/trade/trade.component';
import { FlightTreeComponent } from './component/flight-tree/flight-tree.component';
import { FlighListComponent } from './component/fligh-list/fligh-list.component';

const routes: Routes = [
  { path:'main',component:MainComponent},
  /*{ path:'post', component:PostComponent },*/
 /*{ path:'', component:FeedComponent},
  /*{ path:'trade', component:TradeComponent},*/
  { path:'', component:FlightTreeComponent},
  { path:'flight-list', component:FlighListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
