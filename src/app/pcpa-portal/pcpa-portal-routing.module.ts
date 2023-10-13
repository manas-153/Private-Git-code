import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCpComponent } from './components/view-cp/view-cp.component';
import { CreatePCPAPlanComponent } from './components/create-pcpaplan/create-pcpaplan.component';
import { FinalComponent } from './components/view-cp/final/final.component';
import { UpdateComponent } from './components/view-cp/update/update.component';
import { PcpaplanComponent } from './components/pcpaplan/pcpaplan.component';


const routes: Routes = [
  {path:'',component:CreatePCPAPlanComponent},
  {path:'PCPA Plan',component:PcpaplanComponent},
  {path:'Create PCPA Plan',component:CreatePCPAPlanComponent},
  {path:'ViewCp',component:ViewCpComponent,
   children:[
    {
      path:'final',component:FinalComponent
    },
    {
      path:'update',component:UpdateComponent
    }
   ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcpaPortalRoutingModule { }
