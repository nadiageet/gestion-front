import {Component, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {Us} from "../us";

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  formSubject: Subject<Us> = new Subject();

  usList: Us[] = [];
  maxPoints = 20;
  remaining = this.maxPoints;
  private formSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.formSub = this.formSubject.subscribe((us: Us) => {
      us.id = this.usList.length + 1;
      us.taken = false;
      if (this.remaining >= us.points) {
        this.remaining -= us.points;
        us.taken = true;
        /*if (this.remaining === 0) {
          this.formSub.unsubscribe();
        }*/
      }
      this.usList.push(us);
    });
  }

}
