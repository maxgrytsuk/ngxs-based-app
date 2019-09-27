import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    comment: string;
}

@Component({
    selector: 'comment-dialog',
    templateUrl: 'comment.dialog.html',
})
export class CommentDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<CommentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}