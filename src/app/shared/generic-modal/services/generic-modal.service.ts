import { GenericModalConfig } from '../models/generic-modal-config.model';
import { GenericModalComponent } from './../generic-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericModalService {

  opened = new BehaviorSubject<boolean>(false);

  constructor(
    private dialog: MatDialog,
  ) { }

  openDialog(data: GenericModalConfig): Observable<any> | void {
    const isOpened = this.opened.getValue();
    if (!isOpened) {
      this.opened.next(true);
      let dialogRef = this.dialog.open(
        GenericModalComponent,
        {
          data,
          maxHeight: '100%',
          maxWidth: '100%',
          height: data.content ? '280px' : '160px',
          width: '580px',
          disableClose: false
        }
      );
      return dialogRef.afterClosed();
    }
  }
}
