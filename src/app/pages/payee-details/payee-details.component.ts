import { Component, OnInit } from '@angular/core';
import { PayeeDetailsService } from '../../service/payee-details.service';
import { PayeeDetails } from '../../model/payeeDetails-module';
import { AccountService } from '../../service/account-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { AddpayeeComponent } from './addpayee/addpayee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payee-details',
  templateUrl: './payee-details.component.html',
  styleUrls: ['./payee-details.component.scss']
})
export class PayeeDetailsComponent implements OnInit {
rows : Array<PayeeDetails>
modalRef: MdbModalRef<AddpayeeComponent> | null = null;
  constructor(
    private payeeDetailsService : PayeeDetailsService,
    private accountService : AccountService, private modalService:MdbModalService
  ) { }
addpayee:boolean = false
  handleAction(id:any)
  { 
    this.addpayee = true;
     this.modalService.open(AddpayeeComponent);
     

  }

  ngOnInit() {
    this.rows = [];
    let userId = localStorage.getItem('user');
    if (userId != null) {
      userId = JSON.parse(userId).id
    }
    console.log(userId)
    this.getpayeeDetails(userId);

    
  }
  getpayeeDetails(userId:any)
  {
    this.accountService.getAccountDetails(userId).subscribe(data => {
      console.log(data[0])
      let id = data[0].id
      this.payeeDetailsService.gettPayeeDetails(id).subscribe(data => {
        this.rows = data;      
       console.log(this.rows)
      })

    })
  }
  deleteById(accountId:number){
    this.payeeDetailsService.deleteById(accountId).subscribe(data=>{
      // {
      //   let userId = localStorage.getItem('user');
      //   this.getpayeeDetails(userId);
      // }
      this.ngOnInit();
    })
  }
  a:any
  update(payeeDetails:any)

  
  {
    this.payeeDetailsService.setexistPayeeDetails(payeeDetails);
    console.log(payeeDetails);

    this.modalService.open(AddpayeeComponent, {
      data:{existpayeeDetails:payeeDetails}
     });
  //  this.modalService.
    

  }

  

}
