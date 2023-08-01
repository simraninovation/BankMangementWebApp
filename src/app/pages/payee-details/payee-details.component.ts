import { Component, OnInit } from '@angular/core';
import { PayeeDetailsService } from '../../service/payee-details.service';
import { PayeeDetails } from '../../model/payeeDetails-module';
import { AccountService } from '../../service/account-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { AddpayeeComponent } from './addpayee/addpayee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';


@Component({
  selector: 'app-payee-details',
  templateUrl: './payee-details.component.html',
  styleUrls: ['./payee-details.component.scss']
})
export class PayeeDetailsComponent implements OnInit {
rows : Array<PayeeDetails>
modalRef: MdbModalRef<AddpayeeComponent> | null = null;
accountholderId:any
  constructor(
    private payeeDetailsService : PayeeDetailsService,
    private accountService : AccountService, private modalService:MdbModalService
  ) { }
addpayee:boolean = false

  handleAction()
  { 
  
     this.modalService.open(AddpayeeComponent);
     

  }
  confirmationPopup(id:any)
  { 
  
     this.modalService.open(NotificationPopupComponent,{
      data:{id:id}
     })
     this.ngOnInit();
     

  }
  

  ngOnInit() {
    this.rows = [];
    let accountId = localStorage.getItem('accountId');
    this.getpayeeDetails(accountId);
    

    
  }
  getpayeeDetails(accountId:any)
  {
    
      this.payeeDetailsService.gettPayeeDetails(accountId).subscribe(data => {
        this.rows = data;      
    
      })

  }
  deleteById(payeeAccountId:number){
    this.payeeDetailsService.deleteById(payeeAccountId).subscribe(data=>{
      this.ngOnInit();
      
    })
    alert("Are you sure you want to delete this payee")
  }
  a:any
  update(payeeDetails:any)

  
  {
    this.payeeDetailsService.setexistPayeeDetails(payeeDetails);
  

    this.modalService.open(AddpayeeComponent, {
      data:{existpayeeDetails:payeeDetails}
     });
 
    

  }
  

  

}
