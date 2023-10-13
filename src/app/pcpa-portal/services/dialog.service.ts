import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from '../components/dialog-content/dialog-content.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(supplier_info:any):MatDialogRef<DialogContentComponent> {
    const dialogRef = this.dialog.open(DialogContentComponent,{
        data: supplier_info,
    
    });
     return dialogRef;
  }
}
