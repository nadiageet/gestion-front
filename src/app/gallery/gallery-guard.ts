import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

export class GalleryGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return timer(3000)
      .pipe(switchMap(() => of(true)));
  }

}
