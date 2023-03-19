import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FeedModel } from 'src/app/model/feed-model';
import { QueryParam } from 'src/app/model/query-model';
import { QueryService } from 'src/app/service/query-service';
import { environment } from 'src/environments/environment';

declare var contentWayPoint: any; 

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  //https://picsum.photos/id/237/400/300

  feeds: FeedModel[] = [{
    FLSR_ID: "188558",
    FSIN_ID: "31",
    ID: "0b7714fd4c4c0000933713ac_0|14fd0b774c4f00003608b3bd_0",
    PRICE: "15348",
    FLY_DURATION: "1.25",
    RET_DURATION: "1.25",
    TOTAL_DURATION: "2.5",
    ID_OUT: "0b7714fd4c4c0000933713ac_0",
    DEP_DATE_OUT: "2023-06-24 07:35:00.0",
    ARR_DATE_OUT: "2023-06-24 08:50:00.0",
    AIRLINE_OUT: "FR",
    COUNTRY_FROM_OUT: "Hungary",
    COUNTRY_TO_OUT: "Poland",
    CITY_FROM_OUT: "Budapest",
    CITY_TO_OUT: "Poznań",
    FLIGHT_NO_OUT: "4271",
    ID_BACK: "14fd0b774c4f00003608b3bd_0",
    DEP_DATE_BACK: "2023-06-27 18:35:00.0",
    ARR_DATE_BACK: "2023-06-27 19:50:00.0",
    AIRLINE_BACK: "FR",
    COUNTRY_FROM_BACK: "Hungary",
    COUNTRY_TO_BACK: "Poland",
    CITY_FROM_BACK: "Poznań",
    CITY_TO_BACK: "Budapest",
    FLIGHT_NO_BACK: "4272",
    FX_RATE: "401.88304",
    EUR_PRICE: "38.19",
    CR_DATE: "2023-03-19 05:10:06.0",
    SEC_PRICE: "15292.0",
    TH_PRICE: "15290.0",
    FO_PRICE: "15290.0"
  }];
  isloadCompleted = false;


  constructor(private _httpClient: HttpClient, private queryService: QueryService) { 


  }

  ngOnInit(): void {

    console.log(this.feeds);

    let queryGetDto = this.queryService.createQueryObject('result_for_fsre',[new QueryParam("fsreId", "SINGLE", ["5"])]);

    const all_search_request = environment.native_query;

    this._httpClient
            .get<FeedModel[]>(all_search_request, {params: queryGetDto}).pipe(map((response : FeedModel[]) => {

              this.feeds = response;
              this.isloadCompleted = true;
              console.log(this.feeds);
              
              //this.contentWayPoint();

              //scrolledWindow();
              contentWayPoint();
              


              
            })).subscribe();     
  }

   randomImage(): string {
    return "https://picsum.photos/id/"+ (Math.floor(Math.random() * 900) + 100).toString() +"/400/300";
  }
}
