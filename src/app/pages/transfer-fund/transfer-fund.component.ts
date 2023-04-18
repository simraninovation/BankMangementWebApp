import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../service/account-service.service';

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
  transferUserBalance:any
  currentUserBalance:any
  transferUserId:any
  dataUpdate = {
    "id": "",
    "balance":""
  }
  constructor(
    private accountService: AccountService,
    // private transactionService: TransactionService,
    private route: ActivatedRoute
  ) { }




  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fund.AccountNumber = params['accountNumber'];
      this.fund.IFSC = params['ifsc']
    });


  }
  formSubmit() {

    this.accountService.getAccountByNumber(this.fund.AccountNumber).subscribe(data => {
      console.log(this.fund)
      console.log("this-->",data)
      if(data == null || data == undefined){
        this.isError = true
        this.error = "Account Number Not Found"
      }
      else{
        this.transferUserBalance =  parseInt(data['balance']) + parseInt(this.fund.Amount)
        this.transferUserId =  data['id']
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
          this.accountService.updateAccountBalance(this.dataUpdate).subscribe((data)=>{})
          this.dataUpdate.id = this.accountUserId
          this.dataUpdate.balance = this.currentUserBalance
          this.accountService.updateAccountBalance(this.dataUpdate).subscribe((data)=>{})
         
        }
        
        })
      }



    })
  }

}
