import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  hero = {
    image: '/assets/kuyajo.jpg',
    alt: 'Golf Hero Image',
    title: 'Master Your Swing with Us at BW Golf',
    description:
      "Elevate your game with our premier golf training and lessons. Designed for players of all skill levels, our expert instructors provide personalized coaching to help you master your swing, improve your technique, and build confidence on the course. Whether you're a beginner or a seasoned golfer, we offer an exceptional experience tailored to your goals. Step onto the green and take your skills to the next level with us!",
  };

  joinClub = {
    image: '/assets/home-join.jpg',
    alt: 'Golf Lessons',
    title: 'Join BW Golf',
    description:
      'Experience the best golf trainings and lessons to up your game.',
    buttonAction: () => (window.location.href = 'services.html'),
    buttonText: 'Join Now',
  };

  team = {
    image: '/assets/home-team.jpg',
    alt: 'Team',
    title: 'Our Team',
    description: 'Improve your skills with our expert instructors.',
    buttonAction: () => (window.location.href = 'team.html'),
    buttonText: 'Book Now',
  };

  about = {
    image: '/assets/home-about.jpg',
    alt: 'About',
    title: 'Know More About BW Golf',
    description: 'Explore more about what BW Golf is all about!',
    buttonAction: () => (window.location.href = 'shop.html'),
    buttonText: 'Shop Now',
  };
}
