import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Trip {
  from: string;
  to: string;
  starttime: string;
  endtime: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DB-UI';

  trips: Trip[] = [];
  filteredTrips: Trip[] = [];
  tripDurations: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Trip[]>('http://demo8653312.mockable.io/').subscribe((data: Trip[]) => {
      this.trips = data;
      this.filteredTrips = this.trips;

      this.trips.forEach((trip) => {
        const start = new Date(`2023-01-01T${trip.starttime}:00`);
        const end = new Date(`2023-01-01T${trip.endtime}:00`);
        const duration = new Date(end.getTime() - start.getTime());
        const hours = duration.getUTCHours();
        const minutes = duration.getUTCMinutes();
        this.tripDurations[trip.starttime] = `${hours}h ${minutes}min`;
      });
    });
  }

  filterTrips(city: string, direction: 'from' | 'to') {
    this.filteredTrips = this.trips.filter((trip) => trip[direction] === city);
  }
}
