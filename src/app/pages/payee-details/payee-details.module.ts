import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeDetailsComponent } from './payee-details.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const PAYEE_ROUTE = [

  { path: '', component: PayeeDetailsComponent }
  
]


@NgModule({
  declarations: [PayeeDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    // RouterModule,
    RouterModule.forChild(PAYEE_ROUTE)
  ]
})
export class PayeeDetailsModule { }
