import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const TRANSACTION_ROUTE = [

  { path: '', component: TransactionComponent }
  
]

@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    // RouterModule,
    RouterModule.forChild(TRANSACTION_ROUTE)
  ]
})
export class TransactionModule { }
