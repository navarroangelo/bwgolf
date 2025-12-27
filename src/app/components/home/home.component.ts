import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  hero = {
    image: '/assets/kuyajo.jpg',
    alt: 'Golf course with beautiful green landscape',
    title: 'Master Your Swing with Us at BW Golf',
    description:
      "Elevate your game with our premier golf training and lessons. Designed for players of all skill levels, our expert instructors provide personalized coaching to help you master your swing, improve your technique, and build confidence on the course.",
  };

  joinClub = {
    image: '/assets/home-join.jpg',
    alt: 'Golfer practicing at driving range',
    title: 'Join BW Golf',
    description:
      'Experience the best golf trainings and lessons to up your game.',
    buttonText: 'Join Now',
  };

  team = {
    image: '/assets/home-team.jpg',
    alt: 'Professional golf instructors team',
    title: 'Our Team',
    description: 'Improve your skills with our expert instructors.',
    buttonText: 'Meet the Team',
  };

  about = {
    image: '/assets/home-about.jpg',
    alt: 'BW Golf facility overview',
    title: 'Know More About BW Golf',
    description: 'Explore more about what BW Golf is all about!',
    buttonText: 'Learn More',
  };

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
