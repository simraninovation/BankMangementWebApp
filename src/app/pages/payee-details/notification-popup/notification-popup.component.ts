import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { PayeeDetailsService } from 'src/app/service/payee-details.service';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {
  id:any

  constructor(public  modalRef: MdbModalRef<NotificationPopupComponent>, private payeeDetailsService : PayeeDetailsService) { }

  ngOnInit(): void {
    console.log(this.id)
    
  }
  deleteById(){
    this.payeeDetailsService.deleteById(this.id).subscribe(data=>{
     this.modalRef.close()
     window.location.reload();
      
    })
  }

}
