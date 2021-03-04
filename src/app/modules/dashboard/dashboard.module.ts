import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    NewTaskComponent,
    TaskListComponent
  ]
})
export class DashboardModule { }
