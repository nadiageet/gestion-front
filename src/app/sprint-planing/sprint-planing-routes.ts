import {Routes} from '@angular/router';
import {UsComponent} from './us/us.component';

export const sprintPlaningRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsComponent,
  }
];
