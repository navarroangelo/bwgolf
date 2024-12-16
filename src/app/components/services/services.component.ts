import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  drivingRangeImage: string = 'assets/service-driving-range.jpg';
  trainingImage: string = 'assets/service-training.jpg';
  clubFittingImage: string = 'assets/service-club-fitting.jpg';
}
