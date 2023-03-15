import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import DataSource from 'devextreme/data/data_source';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit  {

  @ViewChild("allFlightSearchRequest") allFlightSearchRequest!: DxDataGridComponent;
  allFlightSearchRequestStore: CustomStore;
  allFlightSearchRequestDataSource: any;

  @ViewChild("allFlightSearchResultInstance") allFlightSearchResultInstance!: DxDataGridComponent;
  allFlightSearchResultInstanceStore?: CustomStore;
  allFlightSearchResultInstanceDataSource: any;

  @ViewChild("allFlightSearchResultDetail") allFlightResultDetail!: DxDataGridComponent;
  allFlightResultDetailStore!: CustomStore;
  allFlightResultDetailDataSource: any;
  

  choosenfsreId : number = 0;
  choosenfsinId : number = 0;

  constructor(private _httpClient: HttpClient) { 

    this.showFlightResults = this.showFlightResults.bind(this);
    this.showFlightResultsDetails = this.showFlightResultsDetails.bind(this);


    let that = this;

    this.allFlightSearchRequestStore = new CustomStore({
      key: 'fsreId',
      loadMode: 'raw',
      cacheRawData: false,
      load: function (loadOptions: any) {

        const all_flight_result_url = environment.all_flight_request;

        return that._httpClient
            .get(all_flight_result_url, {})
            .toPromise()
            .then((result: any) => {
              console.log('all_flight_request result len:' + result.length);

              return result
            })
            .catch((error: any) => {
              console.error('error....' + error.message)
              throw "Data Loading Error";
            });
      },
      insert: function (values : any) {

        console.log(values);

        return Promise.resolve('x');

      }
      
    });

    this.allFlightSearchRequestDataSource = new DataSource({
      store: this.allFlightSearchRequestStore
    });

    this.allFlightSearchResultInstanceStore = new CustomStore({
      key: 'fsinId',
      loadMode: 'raw',
      cacheRawData: false,
      load: function (loadOptions: any) {

        console.log('load invoked!')

        const all_flight_result_url = environment.all_flight_result_instance + that.choosenfsreId?.toString();

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

    this.allFlightSearchResultInstanceDataSource = new DataSource({
      store: this.allFlightSearchResultInstanceStore
    });


    this.allFlightResultDetailStore = new CustomStore({
      key: 'flsrId',
      loadMode: 'raw',
      cacheRawData: false,
      load: function (loadOptions: any) {

        console.log('load invoked!')

        const all_flight_result_details = environment.all_flight_result_details + that.choosenfsinId?.toString();

        return that._httpClient
            .get(all_flight_result_details, {})
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

    this.allFlightResultDetailDataSource = new DataSource({
      store: this.allFlightResultDetailStore
    });






  }

  ngOnInit(): void {
  }

  onCellPrepared(e : any) {


      if(e.rowType === "data" && e.column.dataField === "boolId") {
  
      if (e.data.boolId == 0) {

        e.cellElement.style.color = "red";
        e.cellElement.textContent = 'Érvénytelenítve';
      }

      if (e.data.boolId == 1) {

        e.cellElement.style.color = "Coral";
        e.cellElement.textContent = 'Érvényes';
      }
    
    }

  }

  showFlightResults(e : any) {
    
    console.log("showFlightResults invoked!");
    console.log(e.row.data.fsreId);

    this.choosenfsreId = e.row.data.fsreId;

    this.allFlightSearchResultInstance.instance.getDataSource().reload();
    


  }

  showFlightResultsDetails(e : any) {
    
    console.log("showFlightResults invoked!");
    console.log(e);

    console.log("showFlightResults invoked!");
    console.log(e.row.data.fsinId);

    this.choosenfsinId = e.row.data.fsinId;

    this.allFlightResultDetail.instance.getDataSource().reload();

    

  }

}
