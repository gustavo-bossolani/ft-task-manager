import { TaskListModule } from './task-list/task-list.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TaskListModule
  ],
  exports: [
    DashboardComponent,
    NewTaskComponent,
    TaskListComponent
  ]
})
export class DashboardModule { }
