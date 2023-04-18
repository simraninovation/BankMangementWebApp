import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PayeeDetailsService } from '../../../service/payee-details.service';
import { PayeeDetailsModule } from '../payee-details.module';
import { PayeeDetails } from 'src/app/model/payeeDetails-module';


@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.scss']
})

export class AddpayeeComponent implements OnInit {
  payeeForm: any = UntypedFormGroup
  payeeDetails:PayeeDetailsModule
  existpayeeDetails:any

  constructor(private formBuilder: UntypedFormBuilder, public  modalRef: MdbModalRef<AddpayeeComponent>,
    private payeedetails:PayeeDetailsService) {
     
    }

  ngOnInit(): void {
    
    console.log(this.existpayeeDetails);
    // this.payeedetails.getexistPayeeDetails().subscribe(data=>{
    //   this.existpayeeDetails = data;
    //   console.log(this.existpayeeDetails,"here");
    
    //  })
    this.createform();
  }
  createform(){
    console.log("here is");
    this.payeeForm = this.formBuilder.group({
      accountNumber: [this.existpayeeDetails?.accountNumber?this.existpayeeDetails.accountNumber:null, [Validators.required, ]],
      ifsc: [this.existpayeeDetails?.ifsc?this.existpayeeDetails.ifsc:null, [Validators.required]],
      name: [this.existpayeeDetails?.name?this.existpayeeDetails.name:null, [Validators.required]]
     
    })
  }
  onSubmit(payeeForm:any){
    console.log(payeeForm.value)
    let accountId = localStorage.getItem('accountId');
    // if(accountId != null){
    //   accountId = JSON.parse(accountId).id   
    // }
  this.payeeDetails = payeeForm.value
  this.payeeDetails['accountId'] = {"id":accountId}
    console.log(this.payeeDetails)
    this.payeedetails.createPayee(this.payeeDetails).subscribe()
    this.modalRef.close()
   window.location.reload();

  }
  onUpdate(payeeForm:any){
    
    this.payeeDetails = {
      id:this.existpayeeDetails?.id,
      ifsc:payeeForm.value.ifsc,
      name:payeeForm.value.name,
      accountNumber:payeeForm.value.accountNumber
    }
    console.log(this.payeeDetails)
    
    this.payeedetails.update(this.payeeDetails).subscribe(data=>{})
    this.modalRef.close()
   window.location.reload();

  }
  

  

}
