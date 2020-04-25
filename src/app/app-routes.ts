import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'sprint',
    loadChildren: () => import('./sprint-planing/sprint-planing.module').then(m => m.SprintPlaningModule)
  }
];
