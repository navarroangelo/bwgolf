import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  image: string;
  alt: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [NgForOf, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  pageTitle = 'Our World-Class Services';
  pageSubtitle = 'Experience premium golf facilities and professional training designed to elevate your game.';

  services: Service[] = [
    {
      image: 'assets/service-driving-range.jpg',
      alt: 'Scenic driving range with lush green surroundings',
      title: 'Driving Range',
      description:
        'Vibrant scenery of our driving range will truly make your mood right for your right swing. Our driving range offers a wide range of yards for golfers who hit their clubs like Tiger Woods.',
      features: ['Multiple distance targets', 'Covered bays available', 'Night lighting'],
    },
    {
      image: 'assets/service-training.jpg',
      alt: 'Professional golf training session',
      title: 'Training & Lessons',
      description:
        'Our training programs are designed to help golfers of all levels improve their skills. Join our lessons and get personalized coaching from our expert instructors.',
      features: ['One-on-one coaching', 'Group sessions', 'Video analysis'],
    },
    {
      image: 'assets/service-club-fitting.jpg',
      alt: 'Professional club fitting equipment',
      title: 'Club Fitting',
      description:
        'Get the perfect fit for your clubs with our professional club fitting services. Ensure your equipment is tailored to your swing for optimal performance.',
      features: ['Custom fitting', 'Launch monitor analysis', 'Expert recommendations'],
    },
  ];
}
