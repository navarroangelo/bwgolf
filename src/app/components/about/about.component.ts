import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgForOf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutSectionTitle: string = 'Learn More About BW Golf';
  aboutSectionContent: string =
    'BW Golf is a club for golfers or non-golfers to improve and elevate their game in the world of golf! We offer training programs for golfers of all levels and sessions tailored to every preferred time of the day. BW Golf is a place where you can learn, practice, and enjoy the game of golf with your friends and family.';
  trainingFeaturesTitle: string = 'Our Training Features';
  trainingFeatures: any[] = [
    {
      image: 'assets/about-training.jpg',
      alt: 'Personalized Training',
      title: 'Personalized Training',
      content: 'Get one-on-one coaching tailored to your needs.',
    },
    {
      image: 'assets/about-lessons.jpg',
      alt: 'Group Lessons',
      title: 'Group Lessons',
      content: 'Join group sessions and learn with others.',
    },
    {
      image: 'assets/about-advance-training.jpg',
      alt: 'Advanced Training',
      title: 'Advanced Training',
      content: 'Take your skills to the next level with advanced techniques.',
    },
    {
      image: 'assets/about-kids-lessons.jpg',
      alt: 'Kids Lessons',
      title: 'Kids Lessons',
      content: 'Specialized lessons designed for young golfers.',
    },
  ];
}
