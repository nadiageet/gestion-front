import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  }
];
