import {Observable, of} from 'rxjs';

export class MockActivatedRoute {
  data: Observable<any> = of({});
}
