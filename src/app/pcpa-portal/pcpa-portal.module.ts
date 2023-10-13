import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcpaPortalRoutingModule } from './pcpa-portal-routing.module';
import { ViewCpComponent } from './components/view-cp/view-cp.component';
import { FinalComponent } from './components/view-cp/final/final.component';
import { UpdateComponent } from './components/view-cp/update/update.component';
import { HeaderComponent } from './components/header/header.component';
import { CreatePCPAPlanComponent } from './components/create-pcpaplan/create-pcpaplan.component';
import { MaterialModuleModule } from './modules/material-module.module';
import { PcpaplanComponent } from './components/pcpaplan/pcpaplan.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderDialogueComponent } from './components/loader-dialogue/loader-dialogue.component';

   


@NgModule({
  declarations: [
    ViewCpComponent,
    FinalComponent,
    UpdateComponent,
    HeaderComponent,
    CreatePCPAPlanComponent,
    PcpaplanComponent,
    DialogContentComponent,
    LoaderDialogueComponent,
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    PcpaPortalRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers:[],
  exports:[
    CommonModule,
    MaterialModuleModule,
    PcpaPortalRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PcpaPortalModule { }
