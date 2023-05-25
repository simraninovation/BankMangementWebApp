import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PayeeDetailsService } from '../../../service/payee-details.service';
import { PayeeDetailsModule } from '../payee-details.module';
import { PayeeDetails } from 'src/app/model/payeeDetails-module';
import { GlobalConstants } from 'src/app/shared/GlobalConstants';
import { AccountService } from 'src/app/service/account-service.service';


@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.scss']
})

export class AddpayeeComponent implements OnInit {
  payeeForm: any = UntypedFormGroup
  payeeDetails:PayeeDetailsModule
  existpayeeDetails:any
  error:string
  isOtherBank:any=1
  isError = false

  constructor(private formBuilder: UntypedFormBuilder, public  modalRef: MdbModalRef<AddpayeeComponent>,
    private payeedetails:PayeeDetailsService, private accountService: AccountService) {
     
    }

  ngOnInit(): void {
    if(this.existpayeeDetails?.ifsc!="SIB-12345"){
      this.isOtherBank=2
    }
    else{
      this.isOtherBank=1
    }
    
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
      accountNumber: [{value:this.existpayeeDetails?.accountNumber?this.existpayeeDetails.accountNumber:null, disabled:this.existpayeeDetails?true:false},  [Validators.required, ]],
      ifsc: [{value:this.existpayeeDetails?.ifsc?this.existpayeeDetails.ifsc:null, disabled:this.existpayeeDetails?true:false}, [Validators.required]],
      name: [this.existpayeeDetails?.name?this.existpayeeDetails.name:null, [Validators.required]],

      
      
     
    })
  }
  onSubmit(payeeForm:any){

    console.log(payeeForm.value)
    let accountId = localStorage.getItem('accountId');
    this.accountService.getAccountByNumber(payeeForm.value.accountNumber).subscribe(data => {
      if(data){
      console.log("data:",data)
      }
       if(data == null && this.isOtherBank==1){
        this.isError = true
        this.error = "Account Number Not Found"
        alert(this.error)
       }
       else{
       
        this.payeeDetails = payeeForm.value
        if(this.isOtherBank==1){
          this.payeeDetails['ifsc'] = "SIB-12345"

        }
        this.payeeDetails['accountId'] = {"id":accountId}
         // console.log(this.payeeDetails)
         console.log(data)

      
           this.payeedetails.createPayee(this.payeeDetails).subscribe((result: any) => {
            console.log("result = ", result)
         })
          this.modalRef.close()
        window.location.reload();

       }
    })
    // if(accountId != null){
    //   accountId = JSON.parse(accountId).id   
    // }
  // this.payeeDetails = payeeForm.value
  // this.payeeDetails['accountId'] = {"id":accountId}
  //  // console.log(this.payeeDetails)

  //   this.payeedetails.createPayee(this.payeeDetails).subscribe((result: any) => {
  //     console.log("result = ", result)
  //   })
  //   this.modalRef.close()
  //  //window.location.reload();

  }
  onUpdate(payeeForm:any){
    
    this.payeeDetails = {
      id:this.existpayeeDetails?.id,
      ifsc:this.existpayeeDetails?.ifsc,
      name:payeeForm.value.name,
      accountNumber:this.existpayeeDetails?.accountNumber
    }
    console.log(this.payeeDetails)
    
    this.payeedetails.update(this.payeeDetails).subscribe(data=>{})
    this.modalRef.close()
   window.location.reload();

  }

  abc(value:any)

  {
    console.log(value.value);
    this.isOtherBank = value.value
  }
  

  

}
