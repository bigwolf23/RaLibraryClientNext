import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  /**
   * OK button callback.
   */
  onClickYes() {
    this.dialogRef.close(true);
  }

  /**
   * Cancel button callback.
   */
  onClickNo() {
    this.dialogRef.close(false);
  }

}
