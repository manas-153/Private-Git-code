import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ViewCp} from '../Interfaces/PCPA_interface'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViewCpDataServiceService {

  BaseUrl:string='http://pcpa.stg103.netsmartz.us/api/QualityPlan/QualityPlan';

  constructor(private http:HttpClient) { }

  getCpData():Observable<Array<ViewCp>>
  {
     return this.http.get<ViewCp[]>(this.BaseUrl);
  }
}
