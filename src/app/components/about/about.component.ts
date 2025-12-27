import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TrainingFeature {
  image: string;
  alt: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-about',
  imports: [NgForOf, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutSectionTitle = 'Learn More About BW Golf';
  aboutSectionContent =
    'BW Golf is a club for golfers or non-golfers to improve and elevate their game in the world of golf! We offer training programs for golfers of all levels and sessions tailored to every preferred time of the day. BW Golf is a place where you can learn, practice, and enjoy the game of golf with your friends and family.';
  trainingFeaturesTitle = 'Our Training Features';

  trainingFeatures: TrainingFeature[] = [
    {
      image: 'assets/about-training.jpg',
      alt: 'Professional instructor providing personalized golf training',
      title: 'Personalized Training',
      content: 'Get one-on-one coaching tailored to your needs.',
    },
    {
      image: 'assets/about-lessons.jpg',
      alt: 'Group of golfers learning together',
      title: 'Group Lessons',
      content: 'Join group sessions and learn with others.',
    },
    {
      image: 'assets/about-advance-training.jpg',
      alt: 'Advanced golf techniques demonstration',
      title: 'Advanced Training',
      content: 'Take your skills to the next level with advanced techniques.',
    },
    {
      image: 'assets/about-kids-lessons.jpg',
      alt: 'Young golfer receiving instruction',
      title: 'Kids Lessons',
      content: 'Specialized lessons designed for young golfers.',
    },
  ];
}
