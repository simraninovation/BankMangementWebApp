import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AccountManagementComponent } from './account-management.component';
import { RouterModule } from '@angular/router';

const ACCOUNT_ROUTE = [
  {
    path:'', component : AccountManagementComponent, children :[
      {path : 'accountDetails', component: AccountDetailsComponent},
    
    ]
  }
]

@NgModule({
  declarations: [
    AccountManagementComponent,
    AccountDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientModule,
        // RouterModule,
        RouterModule.forChild(ACCOUNT_ROUTE)
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AccountManagementModule { }
