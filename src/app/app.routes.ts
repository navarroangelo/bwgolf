import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ServicesComponent } from './components/services/services.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | BW Golf' },
  { path: 'about', component: AboutComponent, title: 'About | BW Golf' },
  { path: 'team', component: TeamComponent, title: 'Our Team | BW Golf' },
  { path: 'services', component: ServicesComponent, title: 'Services | BW Golf' },
  { path: '404', component: PagenotfoundComponent, title: 'Page Not Found | BW Golf' },
  { path: '**', redirectTo: '404' },
];
