import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DB-UI';

  trips = [
    {
      from: 'Frankfurt Hbf',
      to: 'Berlin Hbf',
      starttime: '09:40',
      endtime: '11:20',
    },
    {
      from: 'Berlin Hbf',
      to: 'Frankfurt Hbf',
      starttime: '10:40',
      endtime: '12:20',
    },
    {
      from: 'Frankfurt Hbf',
      to: 'Dortmund Hbf',
      starttime: '19:30',
      endtime: '22:59',
    },
  ];

  filteredTrips = this.trips;

  tripDurations: { [key: string]: string } = {};

  filterTrips(city: string, direction: 'from' | 'to') {
    this.filteredTrips = this.trips.filter((trip) => trip[direction] === city);
  }

  ngOnInit() {
    this.trips.forEach((trip) => {
      const start = new Date(`2023-01-01T${trip.starttime}:00`);
      const end = new Date(`2023-01-01T${trip.endtime}:00`);
      const duration = new Date(end.getTime() - start.getTime());
      const hours = duration.getUTCHours();
      const minutes = duration.getUTCMinutes();
      this.tripDurations[trip.starttime] = `${hours}h ${minutes}min`;
    });
  }
}
