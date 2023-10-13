import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { ViewCp} from 'src/app/pcpa-portal/Interfaces/PCPA_interface';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { DialogService } from 'src/app/pcpa-portal/services/dialog.service';
import { ViewCpDataServiceService } from 'src/app/pcpa-portal/services/view-cp-data-service.service';
import { LoaderDialogueServiceService } from 'src/app/pcpa-portal/services/loader-dialogue-service.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers:[DatePipe]
})
export class FinalComponent  {


  filterInputs!:FormGroup;

  Opened:boolean = false;

  dataSource:ViewCp[]=[]
  FilteredData:ViewCp[]=[];

  @ViewChild('myTable', { static: false }) myTable!: ElementRef;


  constructor(private DatePipe:DatePipe,private DialogService:DialogService, private ViewCpService:ViewCpDataServiceService,private loaderSer:LoaderDialogueServiceService,private fb:FormBuilder) {

    this.filterInputs=fb.group({
      PartNo:new FormControl(''),
      PartName:new FormControl(''),
      VendorCode:new FormControl(''),
      VendorName:new FormControl('')
    })
  }

  ngOnInit()
  {
    this.ViewCpService.getCpData().subscribe((res:Array<ViewCp>)=>
      {
             this.FilteredData=res;
      })
  }


  displayedColumns: string[] = ['S.No', 'Supplier Name', 'Supplier Code', 'Part No','Part Name','Commodity','Control Panel Original Date','Control Plan Revision Date','Control Plan Revision Number','Revision History','Document'];
 

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
      
    }, 900);






   
  }

  exportToExcel(): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    // Export the Excel file
    XLSX.writeFile(wb, 'exported-data.xlsx');
  }

  filterData()
  {
    const keywords = this.filterInputs.value.PartName.toLowerCase().split(' ');
    console.log(keywords);


    this.dataSource.filter((item: ViewCp):boolean => {

        const keywords = this.filterInputs.value.PartName.toLowerCase().split(' ');
        const itemText = item.part_Name?.toLowerCase();
        console.log("itemText",itemText);
    
         return keywords.some((keyword:any) => itemText?.includes(keyword));
    });
  }

}
