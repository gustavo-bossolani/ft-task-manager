import { GenericModalService } from './services/generic-modal.service';
import { GenericModalComponent } from './generic-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    GenericModalComponent
  ],
  providers:[
    GenericModalService
  ]
})
export class GenericModalModule { }
