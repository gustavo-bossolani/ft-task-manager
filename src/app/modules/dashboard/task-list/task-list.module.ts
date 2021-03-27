import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    LoaderModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    TaskListComponent,
    TaskListItemComponent
  ]
})
export class TaskListModule { }
