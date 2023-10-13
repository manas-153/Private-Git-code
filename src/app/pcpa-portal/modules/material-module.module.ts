import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// all materila ui components 

import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

import {MatRadioModule} from '@angular/material/radio';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTableModule} from '@angular/material/table';


import {MatMenuModule} from '@angular/material/menu';

import {MatDividerModule} from '@angular/material/divider';

import { MatTooltipModule } from '@angular/material/tooltip';

import {MatDialogModule} from '@angular/material/dialog';

import {MatChipsModule} from '@angular/material/chips';

import {MatSelectModule} from '@angular/material/select';




// ---------------------------- 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule 
    
    // Add other Material UI modules you want to export
  ],
})
export class MaterialModuleModule { }
