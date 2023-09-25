import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomAggregate } from '../model/custom-aggregate';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  flightsData: any[] | undefined;

  constructor() { }



}
