import {Component, OnInit} from '@angular/core';
import {Picture} from './picture';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  pictures: Picture[] = [];
  test: 1;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(data => {
      this.pictures = data['pictures'];
    });
    // console.table(activatedRoute.snapshot.data);
  }

  ngOnInit() {
  }

}
