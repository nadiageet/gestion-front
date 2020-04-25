import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-us-form',
  templateUrl: './us-form.component.html',
  styleUrls: ['./us-form.component.scss']
})
export class UsFormComponent implements OnInit {

  form: FormGroup;
  labelControl: FormControl;
  pointsControl: FormControl;
  @Input() formSubject: Subject;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.labelControl = this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    this.pointsControl = this.formBuilder.control(1, [Validators.min(1), Validators.required], []);
    this.form = this.formBuilder.group({
      label: this.labelControl,
      points: this.pointsControl
    });
  }

  submitForm() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const us = this.form.value;
    this.formSubject.next(us);

    this.form.reset();
    this.pointsControl.setValue(1);
  }
}
