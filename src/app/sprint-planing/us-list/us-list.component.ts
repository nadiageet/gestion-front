import {Component, Input, OnInit} from '@angular/core';
import {Us} from '../us';

@Component({
  selector: 'app-us-list',
  templateUrl: './us-list.component.html',
  styleUrls: ['./us-list.component.scss']
})
export class UsListComponent implements OnInit {

  @Input() usList: Us[] = [];
  columns: any[] = [];
  constructor() { }

  ngOnInit() {
    this.columns = [
      {
        header: 'Libellé',
        field: 'label'
      },
      {
        header: 'points',
        field: 'points'
      },
      {
        header: 'valeur',
        field: 'value'
      }
    ];
  }

}
