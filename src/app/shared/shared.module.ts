import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarModule,
  DropdownModule,
  FullCalendarModule,
  PaginatorModule,
  TableModule,
  VirtualScrollerModule
} from "primeng";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    PaginatorModule,
    DropdownModule,
    FullCalendarModule,
    TableModule
  ],
  exports: [
    VirtualScrollerModule,
    PaginatorModule,
    DropdownModule,
    FullCalendarModule,
    TableModule
  ]
})
export class SharedModule { }
