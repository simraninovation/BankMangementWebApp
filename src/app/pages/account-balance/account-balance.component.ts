import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account-model';
import { AccountService } from '../../service/account-service.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
  rows: Array<accountModel>

  constructor(
    private accountService : AccountService
  ) { }

  ngOnInit() {
    this.rows = []
    let userId = localStorage.getItem('user');
    if(userId != null){
      userId = JSON.parse(userId).id   
    }
    console.log(userId)
    this.accountService.getAccountDetails(userId).subscribe(data =>{     
     this.rows = data
     console.log(this.rows)
    })
  }

}
