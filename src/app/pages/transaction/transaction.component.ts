import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { transactionModel } from 'src/app/model/transaction-model';
import { AccountService } from '../../service/account-service.service';
import { TransactionService } from '../../service/transaction.service';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  rows : Array<transactionModel>
  currentAccountNo : any
  
  // transactionData = {
  //   createdDate: "",
  //   message: "",
  //   amount: ""


  // };
  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    
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
      this.currentAccountNo = data[0].accountNumber

      this.transactionService.gettransactionDetails(data[0].id,data[0].accountNumber).subscribe(data => {
        this.rows = data;      
       
      })

    })


          
    
  }
  p:any=1
  page(val:any){
    console.log(val)
    this.p=val

  }
  downloadMyFile(){
   
    const doc = new jsPDF("p", "pt", "a4");
    const source:HTMLElement = document.getElementById("content") as HTMLElement;
    
    doc.setFontSize(12)
    doc.html(source, {
      callback: function(pdf) {
        doc.save("transaction"); 
      }
    });
    
    
  }
}

