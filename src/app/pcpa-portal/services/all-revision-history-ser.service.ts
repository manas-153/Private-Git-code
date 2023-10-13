import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Revision_History} from '../Interfaces/PCPA_interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRevisionHistorySerService {

  BaseUrl:string='http://pcpa.stg103.netsmartz.us/api/QualityPlan/RevisonById?Id=';



  constructor(private http:HttpClient) { }

  getAllRevisionHistory(id:number):Observable<Revision_History[]>
  {
     return this.http.get<Revision_History[]>(`${this.BaseUrl}${id}`);
  }
}
