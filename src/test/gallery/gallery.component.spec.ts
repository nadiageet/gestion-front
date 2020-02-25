import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from '../../app/gallery/gallery.component';
import {PictureComponent} from '../../app/picture/picture.component';
import {ActivatedRoute} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MockActivatedRoute} from './mock-activated-route';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, PictureComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
