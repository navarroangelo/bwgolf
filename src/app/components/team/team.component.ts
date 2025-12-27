import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface TeamMember {
  image: string;
  alt: string;
  name: string;
  description: string;
  position: string;
}

@Component({
  selector: 'app-team',
  imports: [NgForOf],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  pageTitle = 'Meet Our Team';
  pageSubtitle = 'Our experienced instructors are dedicated to helping you achieve your golfing goals.';

  teamMembers: TeamMember[] = [
    {
      image: '/assets/team-ian.jpg',
      alt: 'Ian Matchado - Professional Golf Instructor',
      name: 'Ian Matchado',
      description:
        'Ian Matchado is one of the veteran players who leads BW Golf, sharing lessons and inspiring players to achieve their goals in the game!',
      position: 'Touring Player Professional / Golf Teaching Professional',
    },
    {
      image: '/assets/team-jojo.jpg',
      alt: 'Jojo Campos - Golf Teaching Professional',
      name: 'Jojo Campos',
      description:
        'Jojo started as a coach in the field and was recognized as a team leader. His exceptional skills elevated him to the ranks of a professional player and teacher.',
      position: 'Supervisor / Golf Teaching Professional',
    },
    {
      image: '/assets/team-noli.jpg',
      alt: 'Noli Kempis - Golf Teaching Professional',
      name: 'Noli Kempis',
      description:
        'Noli is one of the pioneering veteran golf players and coaches in Pampanga, inspiring countless players with his dedication and expertise.',
      position: 'Golf Teaching Professional / Secretary',
    },
  ];
}
