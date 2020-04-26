import {Component, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {Us} from "../us";
import {J} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  formSubject: Subject<Us> = new Subject();

  usList: Us[] = [];
  maxPoints = 20;
  // remaining = this.maxPoints;
  private formSub: Subscription;
  private optimal: number;

  constructor() {
  }

  ngOnInit() {
    this.subscribeToForm();
    this.insertData();
  }

  private subscribeToForm() {
    this.formSub = this.formSubject.subscribe((us: Us) => {
      us.id = this.usList.length + 1;
      us.taken = false;
        /*if (this.remaining === 0) {
          this.formSub.unsubscribe();
        }*/
      // this.usList = [...this.usList, us];
      this.usList.push(us);
      this.save();
      this.optimizeValue();
    });
  }

  private insertData() {
   /* this.formSubject.next({value: 10, label: 'A', points: 10} as Us);
    this.formSubject.next({value: 12, label: 'B', points: 15} as Us);
    this.formSubject.next({value: 7, label: 'C', points: 8} as Us);*/
   this.load();
  }

  /**
   * compute the optimal value getting from us
   */
  private optimizeValue() {
    const n = this.usList.length;
    const dp = Array(n + 1);
    for (let j = 0; j < n + 1; ++j) {
      dp[j] = Array(this.maxPoints + 1);
    }
    for (let j = 0; j <= this.maxPoints; ++j) {
      dp[0][j] = 0;
    }
    for (let i = 1; i <= n; ++i) {
      for (let w = 0; w <= this.maxPoints; ++w) {
        if (this.usList[i - 1].points > w) {
          dp[i][w] = dp[i - 1][w];
        } else {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - this.usList[i - 1].points] + this.usList[i - 1].value);
        }
      }
    }
    this.optimal = dp[n][this.maxPoints];

  }

  private sortByValue = (a, b) => b.value - a.value;

  private save() {
    localStorage.setItem('us', JSON.stringify(this.usList));
  }

  private load() {
    const json = localStorage.getItem('us');
    if (json) {
      this.usList = JSON.parse(json);
    }
  }
}
