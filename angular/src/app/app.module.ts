import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule, DxDataGridComponent, DxDataGridModule, DxPivotGridModule } from 'devextreme-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { PostComponent } from './component/post/post.component';
import { FeedComponent } from './component/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule,
    DxDataGridModule,
    DxPivotGridModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
