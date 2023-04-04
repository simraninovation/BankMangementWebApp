import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TransferFundComponent } from './transfer-fund.component';
import { FormsModule } from '@angular/forms';


const TRANSFER_ROUTE = [

  { path: '', component: TransferFundComponent }
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    // RouterModule,
    RouterModule.forChild(TRANSFER_ROUTE)
  ]
})
export class TransferFundModule { }
