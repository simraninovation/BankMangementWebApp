import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../service/account-service.service';
import { transactionModel } from 'src/app/model/transaction-model';
import { TransactionService } from 'src/app/service/transaction.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  public fund = {
    AccountNumber: '',
    IFSC: '',
    Amount: ''
  };
  accountUserId:any
  error:string
  isError = false
  isAmountEnter:any=false
  transactionModel:transactionModel = {
    message:"",
    amount:"",
    createdDate:"",
    accountId :""
  }
  transferUserBalance:any
  currentUserBalance:any
  transferUserId:any
  dataUpdate = {
    "id": "",
    "balance":""
  }
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) { }




  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.fund.AccountNumber = params['accountNumber'];
      this.fund.IFSC = params['ifsc']
      console.log(params)
      this.transactionModel.accountId = {
       id: params['id']
      }
    });


  }
  formSubmit() {
    if(Number(this.fund.Amount)>0){

    

    this.accountService.getAccountByNumber(this.fund.AccountNumber).subscribe(data => {
      console.log(this.fund)
      console.log("this-->",data)
      if((data == null || data == undefined)&&(this.fund.IFSC=="SIB-12345")){
        this.isError = true
        this.error = "Account Number Not Found"
      }
      else{
        if(this.fund.IFSC=="SIB-12345")
        {
        this.transferUserBalance =  parseInt(data['balance']) + parseInt(this.fund.Amount)
        
        this.transferUserId =  data['id']
        }
        this.accountUserId = localStorage.getItem('accountId')
        
        this.accountService.getAccountById(this.accountUserId).subscribe(userData => {
        
        console.log(userData)
        this.currentUserBalance = userData['balance']
        if(this.currentUserBalance < parseInt(this.fund.Amount)){
          this.isError = true
          this.error = "Insufficient Funds In Account"
        }
        else{
          console.log("********* ", parseInt(this.fund.AccountNumber) - parseInt(this.currentUserBalance))
          this.currentUserBalance = parseInt(this.currentUserBalance) - parseInt(this.fund.Amount)
          console.log("-------------------->",this.transferUserId)
          this.dataUpdate.id = this.transferUserId
          this.dataUpdate.balance = this.transferUserBalance
          console.log(this.dataUpdate)
          if(this.fund.IFSC=="SIB-12345")
          {
          this.accountService.updateAccountBalance(this.dataUpdate).subscribe((data)=>{})
          }
          this.dataUpdate.id = this.accountUserId
          this.dataUpdate.balance = this.currentUserBalance
          this.accountService.updateAccountBalance(this.dataUpdate).subscribe((data)=>{})
        
         
        }
        
        })
      }



    })
  }
  else{
    this.isAmountEnter=true
  }
  }
  transfered()
  {
    console.log(Number(this.fund.Amount)>0)
    if(Number(this.fund.Amount)>0){
      console.log("abc")
    this.transactionModel.message= "transfered"
    this.transactionModel.amount = this.fund.Amount
    
    this.transactionService.transferedAmount(this.transactionModel).subscribe((data)=>{})
    }
    else
    {
      this.isAmountEnter=true
    }

  }

  xyz(value:any)
  {
    console.log(value.value)
       if(value.value>0)
       {
          this.isAmountEnter=false;
          
       }
       else{
        this.isAmountEnter=true;
       }
  }

}
