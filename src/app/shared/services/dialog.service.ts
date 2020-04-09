import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import {Observable} from 'rxjs';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string, reject?: boolean): Observable<boolean> {

    let dialogRef: MatDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '424px',
      backdropClass: 'alert_box',
      hasBackdrop: true,
      panelClass: 'custom_alert_dialog'
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.reject = reject;
    return dialogRef.afterClosed();
  }



}
