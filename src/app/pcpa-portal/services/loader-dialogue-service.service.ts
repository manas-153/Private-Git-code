import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderDialogueComponent } from '../components/loader-dialogue/loader-dialogue.component';


@Injectable({
  providedIn: 'root'
})
export class LoaderDialogueServiceService {

  constructor(private dialog: MatDialog) { }

    StartDialogueLoading():MatDialogRef<LoaderDialogueComponent> {
      
        const dialogRef = this.dialog.open(LoaderDialogueComponent);

        return dialogRef;
      }
   }


