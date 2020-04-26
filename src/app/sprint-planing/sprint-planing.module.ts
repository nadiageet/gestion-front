import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsFormComponent} from './us-form/us-form.component';
import {UsListComponent} from './us-list/us-list.component';
import {UsComponent} from './us/us.component';
import {RouterModule} from '@angular/router';
import {sprintPlaningRoutes} from './sprint-planing-routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [UsFormComponent, UsListComponent, UsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(sprintPlaningRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SprintPlaningModule { }
