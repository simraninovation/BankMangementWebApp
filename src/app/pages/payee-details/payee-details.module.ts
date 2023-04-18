import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeDetailsComponent } from './payee-details.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const PAYEE_ROUTE = [

  { path: '', component: PayeeDetailsComponent }
  
]


@NgModule({
  declarations: [PayeeDetailsComponent, AddpayeeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MdbModalModule,
    MatDialogModule,
    MdbFormsModule,
    ReactiveFormsModule,
    FormsModule,
  

    
    
    // RouterModule,
    RouterModule.forChild(PAYEE_ROUTE)
  ]
})
export class PayeeDetailsModule { }
