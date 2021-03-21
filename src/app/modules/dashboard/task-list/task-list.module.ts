import { LoaderModule } from './../../../components/loader/loader.module';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListComponent } from './task-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskListItemComponent
  ],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [
    TaskListComponent,
    TaskListItemComponent
  ]
})
export class TaskListModule { }
