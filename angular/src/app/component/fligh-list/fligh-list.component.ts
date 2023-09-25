import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-fligh-list',
  templateUrl: './fligh-list.component.html',
  styleUrls: ['./fligh-list.component.css']
})
export class FlighListComponent implements OnInit {

  currentFlight: any;

  constructor(private router: Router) {

    let nav: Navigation | null = this.router.getCurrentNavigation();

    this.currentFlight = nav?.extras.state!['currentFlight'];

   }

  ngOnInit(): void {
  }

}
