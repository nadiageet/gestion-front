import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {galleryRoutes} from './gallery-routes';
import {GalleryComponent} from './gallery.component';
import { PictureComponent } from '../picture/picture.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryResolver} from './gallery-resolver';
import {GalleryGuard} from './gallery-guard';

@NgModule({
  declarations: [
    GalleryComponent,
    PictureComponent
  ],
  providers: [
    GalleryResolver,
    GalleryGuard
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryModule { }
