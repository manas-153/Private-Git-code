import { Component } from '@angular/core';
import {PCPAPlan} from '../../Interfaces/PCPA_interface';

@Component({
  selector: 'app-create-pcpaplan',
  templateUrl: './create-pcpaplan.component.html',
  styleUrls: ['./create-pcpaplan.component.css']
})
export class CreatePCPAPlanComponent {

  dataSource!:Array<PCPAPlan>;

  ngOnInit()
  {
    this.dataSource=[
      {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},

       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       {Srno: undefined, SupplierName: '', SupplierCode:undefined, Part_no:undefined,Part_Name:"", Commodity_Name: '',SelectAuditDate:undefined,Frequency:'',Auditorname:""},
       
       

       


     
     
    
    ];
  }

  displayedColumns: string[] = ['Sr.No', 'SupplierName', 'SupplierCode', 'PartNo','PartName', 'CommodityName','SelectAuditDate','Frequency','AuditorName','Submit'];

 

}
