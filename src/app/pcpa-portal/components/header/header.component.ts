import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {


  mat_options:any=[
    { label: 'PCPA Dashboard', active: true },

    { label: 'PCPA Status', active: false },
    
    {label:'View Cp',active:false},

    { label: 'Create PCPA Plan', active: false },

    { label: 'PCPA Plan', active: false },

    { label: 'PCPA Audi', active: false },

    { label: 'View Audit Report', active: false },

    { label: 'Action Summary', active: false },
 ]

 isDropdownOpen = false;

 toggleDropdown(open: boolean) {
  console.log("called");
   this.isDropdownOpen = open;
 }

  currentActive:number=0;
  routerSubscription!:Subscription;

  constructor(private router: Router){}



 changeHighlight(index:number)
 {
        this.mat_options[this.currentActive].active=false;
        this.currentActive=index;
        this.mat_options[this.currentActive].active=true;
  
 }

}
