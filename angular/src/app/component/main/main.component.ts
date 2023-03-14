import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import AbstractStore from 'devextreme/data/abstract_store';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import DataSource from 'devextreme/data/data_source';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild("allFlightResult") allFlightResult: DxDataGridComponent | undefined;
  allFlightResultStore: CustomStore;
  allFlightResultDataSource: any;

  constructor(private _httpClient: HttpClient) { 


    let that = this;

    this.allFlightResultStore = new CustomStore({
      key: 'flsrId',
      loadMode: 'raw',
      cacheRawData: false,
      load: function (loadOptions: any) {

        const all_flight_result_url = environment.all_flight_result;

        return that._httpClient
            .get(all_flight_result_url, {})
            .toPromise()
            .then((result: any) => {
              console.log('all_flight_result_url result len:' + result.length);

              return result
            })
            .catch((error: any) => {
              console.error('error....' + error.message)
              throw "Data Loading Error";
            });
      },
      
    });

    this.allFlightResultDataSource = new DataSource({
      

      store: this.allFlightResultStore
    });



  }

  ngOnInit(): void {




  }

}
