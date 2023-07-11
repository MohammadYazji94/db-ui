import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DB-UI';

  trips = [
    { from: "Frankfurt(Main)Hbf", to: "Berlin Hbf", starttime: "09:40", endtime: "11:20" },
    { from: "Berlin Hbf", to: "Frankfurt(Main)Hbf", starttime: "09:40", endtime: "11:20" }
  ];

  filteredTrips = this.trips;

  filterTrips(city: string, direction: 'from' | 'to') {
    this.filteredTrips = this.trips.filter(trip => trip[direction] === city);
}
}
