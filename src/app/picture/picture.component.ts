import {Component, Input, OnInit} from '@angular/core';
import {Picture} from '../gallery/picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: Picture;
  test: number;
  constructor() { }

  ngOnInit() {
    this.test = Math.random() * 10;
  }

}
