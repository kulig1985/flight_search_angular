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
import { FilterPipe } from './component/feed/filer.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TradeComponent } from './component/trade/trade.component';
import { HeetComponent } from './component/heet/heet.component';
import { FlightTreeComponent } from './component/flight-tree/flight-tree.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlighListComponent } from './component/fligh-list/fligh-list.component';
import { CityFilterPipe } from './component/flight-tree/city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostComponent,
    FeedComponent,
    FilterPipe,
    TradeComponent,
    HeetComponent,
    FlightTreeComponent,
    FlighListComponent,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule,
    DxDataGridModule,
    DxPivotGridModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
