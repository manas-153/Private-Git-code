export interface PCPAPlan {
    Srno:number | undefined,
    SupplierName:string | undefined,
    SupplierCode:number | undefined,
    Commodity_Name:string | undefined,
    Part_no:number | undefined,
    Part_Name:string | undefined,
    SelectAuditDate:number | undefined,
    Frequency:any | undefined,
    Auditorname:String | undefined,
  }

  export interface ViewCp {

    id:number | undefined,
    supplier_Name: string | undefined,
    supplier_Code : string | undefined,
    part_Number : string |  undefined,
    part_Name : string | undefined,
    commodity : string | undefined,
    cpOriginalDate : string | null | Date,
    cpRevisionDate: string | null | Date,
    revision_Number: number | null,
  }

  export interface Revision_History
  {
    id:number | undefined,
    cpRevisionDate : Date | string | undefined,
    revision_Number : number | undefined,
    revision_History : string | undefined

  }
