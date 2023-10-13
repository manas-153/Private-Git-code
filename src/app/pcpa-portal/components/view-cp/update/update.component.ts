import { Component } from '@angular/core';
import { ViewCp } from 'src/app/pcpa-portal/Interfaces/PCPA_interface';
import { DatePipe } from '@angular/common';
import { DialogService } from 'src/app/pcpa-portal/services/dialog.service';
import * as XLSX from 'xlsx';
import { ViewCpDataServiceService } from 'src/app/pcpa-portal/services/view-cp-data-service.service';
import { LoaderDialogueServiceService } from 'src/app/pcpa-portal/services/loader-dialogue-service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[DatePipe]
})
export class UpdateComponent {

  
  dataSource:Array<ViewCp>=[]

  displayedColumns: string[] = ['S.No', 'Supplier Name', 'Supplier Code', 'Part No','Part Name','Commodity','Control Panel Original Date','Control Plan Revision Date','Control Plan Revision Number','Revision History','Document'];

  Opened:boolean = false;

  constructor(private DatePipe:DatePipe,private DialogService:DialogService, private ViewCpService:ViewCpDataServiceService,private loaderSer:LoaderDialogueServiceService) {}


  ngOnInit()
  {
    this.ViewCpService.getCpData().subscribe((res:Array<ViewCp>)=>
      {
             this.dataSource=res;
             this.dataSource=this.dataSource.filter((item:ViewCp)=>
             {
                   return item.revision_Number!=0;
             })
      })
  }


  openDialog(data:ViewCp)
  {
    this.Opened=!this.Opened; 
    const supplier_info={
      Supplier_Name:data.supplier_Name,
      Part_Name:data.part_Name,
      id:data.id
    }

    const loaderDialogue=this.loaderSer.StartDialogueLoading();

    setTimeout(() => {

      loaderDialogue.close();

          const dialogRef= this.DialogService.openDialog(supplier_info);
           dialogRef.afterClosed().subscribe(result => {
           this.Opened=! this.Opened;
        });
      
    }, 600);






   
  }

  exportToExcel(): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    // Export the Excel file
    XLSX.writeFile(wb, 'exported-data.xlsx');
  }

}
