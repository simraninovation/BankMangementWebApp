import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountBalanceComponent } from './account-balance.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const ACCOUNT_ROUTE = [

  { path: '', component: AccountBalanceComponent }
  
]



@NgModule({
  declarations: [
    AccountBalanceComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    // RouterModule,
    RouterModule.forChild(ACCOUNT_ROUTE)
  ]
})
export class AccountBalanceModule { }
