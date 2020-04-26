import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsComponent } from '../../app/sprint-planing/us/us.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

describe('UsComponent', () => {
  let component: UsComponent;
  let fixture: ComponentFixture<UsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsComponent ],
      imports: [ReactiveFormsModule, FormsModule, CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
