import { Component } from '@angular/core';
import { pcpaPlan } from '../../Interfaces/pcpaplan';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-pcpaplan',
  templateUrl: './pcpaplan.component.html',
  styleUrls: ['./pcpaplan.component.css']
})
export class PcpaplanComponent {

  months :Array<string>=[  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec']
  
  DisplayedRows:Array<string>=['Plan','Audit','Plan Pending']

  twlveMonth:Array<string>=[];
  month_Name!:string;
  currentDate:Date=new Date;
  
  dataSource!:Array<pcpaPlan>;

    constructor()
    {
      for (let i = 0; i < 12; i++) {
        const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + i, 1);
        console.log('next Month is',nextMonth);
        this.month_Name = this.months[nextMonth.getMonth()];
          this.twlveMonth.push(this.month_Name)
      }
    }


    Plan :Array<string>=Array.from({ length: 12 }, () => '');
    Actual :Array<string>=Array.from({ length: 12 }, () => '');
    Plan_Pending:Array<string>=Array.from({ length: 12 }, () => '');


  ngOnInit()
  {
    this.dataSource=[
      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      {Sr_No: undefined, SupplierName: '', SupplierCode:undefined, PartNo:undefined,CommodityName:undefined, AuditPlanDate:undefined,AuditorName:undefined,AuditDoneDate:undefined,
      Ageing: undefined},

      
  
    ];
  }

  displayedColumns: string[] = ['Sr_No', 'SupplierName', 'SupplierCode', 'PartNo', 'CommodityName','AuditPlanDate',
  'AuditorName','AuditDoneDate','Ageing'];

  toppings = new FormControl('');
  toppingList: string[] = ['Monthly', 'Quaterly', 'Yearly'];

 
  

}
