import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { transactionModel } from 'src/app/model/transaction-model';
import { AccountService } from '../../service/account-service.service';
import { TransactionService } from '../../service/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  rows : Array<transactionModel>
  
  // transactionData = {
  //   createdDate: "",
  //   message: "",
  //   amount: ""


  // };
  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
 
    this.rows = [];
    let userId = localStorage.getItem('user');
    if (userId != null) {
      userId = JSON.parse(userId).id
    }
    console.log(userId)

    this.accountService.getAccountDetails(userId).subscribe(data => {
      console.log(data[0])

      this.transactionService.gettransactionDetails(data[0].id).subscribe(data => {
        this.rows = data;      
       
      })

    })
  }
}

