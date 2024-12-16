import { Routes } from '@angular/router';
// IMPORTED COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ServicesComponent } from './components/services/services.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: ServicesComponent },
  { path: '404', component: PagenotfoundComponent },
];
