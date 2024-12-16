import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  meetOurTeamTitle: string = 'Meet Our Team';
  ianMatchadoImage: string = '/assets/team-ian.jpg';
  ianMatchadoAlt: string = 'Ian Matchado';
  ianMatchadoName: string = 'Ian Matchado';
  ianMatchadoDescription: string =
    'Ian Matchado is one of the veteran players who leads BW Golf, sharing lessons and inspiring players to achieve their goals in the game!';
  ianMatchadoPosition: string =
    'Touring Player Professional / Golf Teaching Professional';

  jojoCamposImage: string = '/assets/team-jojo.jpg';
  jojoCamposAlt: string = 'Jojo Campos';
  jojoCamposName: string = 'Jojo Campos';
  jojoCamposDescription: string =
    'Jojo started as a coach in the field and was recognized as a team leader. His exceptional skills elevated him to the ranks of a professional player and teacher.';
  jojoCamposPosition: string = 'Supervisor / Golf Teaching Professional';

  noliKempisImage: string = '/assets/team-noli.jpg';
  noliKempisAlt: string = 'Noli Kempis';
  noliKempisName: string = 'Noli Kempis';
  noliKempisDescription: string =
    'Noli is one of the pioneering veteran golf players and coaches in Pampanga, inspiring countless players with his dedication and expertise.';
  noliKempisPosition: string = 'Golf Teaching Professional / Secretary';
}
