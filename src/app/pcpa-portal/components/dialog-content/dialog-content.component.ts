import { Component,Inject } from '@angular/core';
import { Revision_History } from '../../Interfaces/PCPA_interface'
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllRevisionHistorySerService } from '../../services/all-revision-history-ser.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
  providers:[DatePipe]
})
export class DialogContentComponent {

  dataSource : Array<Revision_History> =[];
  
  displayedColumns: string[] = ['Id', 'CPRevisonDate', 'Revison_Number','Revison_History'];

  constructor(private DatePipe:DatePipe,@Inject(MAT_DIALOG_DATA) public data: any,private RevisionHistorySer:AllRevisionHistorySerService) {}

  ngOnInit()
  {
    this.RevisionHistorySer.getAllRevisionHistory(this.data.id).subscribe((res:Revision_History[])=>
    {
        this.dataSource=res;
    })
  }




}
