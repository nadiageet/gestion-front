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
      if (this.remaining >= us.points) {
        this.remaining -= us.points;
        us.taken = true;
        /*if (this.remaining === 0) {
          this.formSub.unsubscribe();
        }*/
      }
      this.usList.push(us);
      this.usList.sort((a, b) => b.value - a.value);
      //  this.optimizeValue();
    });
  }

  private insertData() {
    this.formSubject.next({value: 10, label: 'A', points: 10} as Us);
    this.formSubject.next({value: 12, label: 'A', points: 15} as Us);
    this.formSubject.next({value: 7, label: 'A', points: 8} as Us);
    this.optimizeValue();
  }

  /*


  for j from 0 to W do:

    m[0, j] := 0


for i from 1 to n do:

    for j from 0 to W do:

        if w[i] > j then:

            m[i, j] := m[i-1, j]

        else:

            m[i, j] := max(m[i-1, j], m[i-1, j-w[i]] + v[i])
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
    console.table(dp);
    this.optimal = dp[n][this.maxPoints];


  }
}
