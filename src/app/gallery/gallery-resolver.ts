import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Picture} from './picture';
import {Observable} from 'rxjs';


export class GalleryResolver implements Resolve<Picture[]> {

  loadPictures(): Picture[] {
    const pictures = [];
    for (let i = 1; i <= 10; ++i) {
      const picture = {
        id: i,
        message: 'photo_' + i,
        pictureNumber: Math.floor(Math.random() * 1000) + 1
      };
      pictures.push(picture);
    }
    return pictures;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Picture[]> | Promise<Picture[]> | Picture[] {
    return this.loadPictures();
  }

}
