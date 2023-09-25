import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CustomAggregate } from 'src/app/model/custom-aggregate';
import { FlightServiceService } from 'src/app/service/flight-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flight-tree',
  templateUrl: './flight-tree.component.html',
  styleUrls: ['./flight-tree.component.css']
})
export class FlightTreeComponent implements OnInit {

  flightsData: any[] | undefined;
  isLoading: boolean = true;
  searchText: any;

  constructor(private http: HttpClient, private router: Router, private flightService : FlightServiceService) { }

  ngOnInit(): void {

      this.loadFlightData(false);

  }

  loadFlightData(force : boolean) {

    this.isLoading = true;

    if (this.flightService.flightsData == undefined || force) {

      console.log(this.flightService.flightsData);

    let customAggregate = new CustomAggregate();
    customAggregate.collectionName = "search_result"
    customAggregate.aggregationName = "all_flight_aggregate_new";
    customAggregate.aggregationParams = []

    this.http.get(environment.custom_mongo + "?customAggregationDTO="+JSON.stringify(customAggregate)).pipe(map((response: any) => {

    console.log("all_fligh_aggregate: " + response.length);

    this.flightsData = response;
    this.isLoading = false;
    this.flightService.flightsData = response;

    })).subscribe();
  }
  else {
    this.isLoading = false;
    this.flightsData = this.flightService.flightsData;
  }

  }

  navigateToList(flight : any) {

    console.log(flight)
    this.router.navigate(['/flight-list'],{ state: { currentFlight: flight } });

  }

}
