//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeDetailsComponent } from './payee-details.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayeeDetailsService } from 'src/app/service/payee-details.service';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';



const PAYEE_ROUTE = [

  { path: '', component: PayeeDetailsComponent }
  
]


@NgModule({
  declarations: [PayeeDetailsComponent, AddpayeeComponent,NotificationPopupComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MdbModalModule,
    MatDialogModule,
    MdbFormsModule,
    ReactiveFormsModule,
    FormsModule,
   
  
    RouterModule.forChild(PAYEE_ROUTE)
  ],
  providers:[
    PayeeDetailsService

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PayeeDetailsModule { }
