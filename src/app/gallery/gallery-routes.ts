import {Routes} from '@angular/router';
import {GalleryComponent} from './gallery.component';
import {GalleryResolver} from './gallery-resolver';
import {GalleryGuard} from './gallery-guard';

export const galleryRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    resolve: {
      pictures: GalleryResolver
    },
    canActivate: [GalleryGuard],
    component: GalleryComponent,
  }
];
