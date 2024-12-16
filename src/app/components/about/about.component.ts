import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutSectionTitle: string = 'Learn More About BW Golf';
  aboutSectionContent: string =
    'BW Golf is a club for golfers or non-golfers to improve and elevate their game in the world of golf! We offer training programs for golfers of all levels and sessions tailored to every preferred time of the day. BW Golf is a place where you can learn, practice, and enjoy the game of golf with your friends and family.';
  trainingFeaturesTitle: string = 'Our Training Features';
  personalizedTrainingImage: string = 'assets/about-training.jpg';
  personalizedTrainingAlt: string = 'Personalized Training';
  personalizedTrainingTitle: string = 'Personalized Training';
  personalizedTrainingContent: string =
    'Get one-on-one coaching tailored to your needs.';
  groupLessonsImage: string = 'assets/about-lessons.jpg';
  groupLessonsAlt: string = 'Group Lessons';
  groupLessonsTitle: string = 'Group Lessons';
  groupLessonsContent: string = 'Join group sessions and learn with others.';
  advancedTrainingImage: string = 'assets/about-advance-training.jpg';
  advancedTrainingAlt: string = 'Advanced Training';
  advancedTrainingTitle: string = 'Advanced Training';
  advancedTrainingContent: string =
    'Take your skills to the next level with advanced techniques.';
  kidsLessonsImage: string = 'assets/about-kids-lessons.jpg';
  kidsLessonsAlt: string = 'Kids Lessons';
  kidsLessonsTitle: string = 'Kids Lessons';
  kidsLessonsContent: string =
    'Specialized lessons designed for young golfers.';
}
