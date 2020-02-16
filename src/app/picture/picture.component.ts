import {Component, Input, OnInit} from '@angular/core';
import {Picture} from '../gallery/picture';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: Picture;
  ready = false;
  constructor() { }

  ngOnInit() {
    timer(this.picture.id * 1000)
      .pipe(map(() => this.ready = true))
      .subscribe();
  }

}
