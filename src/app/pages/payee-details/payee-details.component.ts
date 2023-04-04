import { Component, OnInit } from '@angular/core';
import { PayeeDetailsService } from '../../service/payee-details.service';
import { PayeeDetails } from '../../model/payeeDetails-module';
import { AccountService } from '../../service/account-service.service';

@Component({
  selector: 'app-payee-details',
  templateUrl: './payee-details.component.html',
  styleUrls: ['./payee-details.component.scss']
})
export class PayeeDetailsComponent implements OnInit {
rows : Array<PayeeDetails>
  constructor(
    private payeeDetailsService : PayeeDetailsService,
    private accountService : AccountService
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

      this.payeeDetailsService.gettPayeeDetails(data[0].id).subscribe(data => {
        this.rows = data;      
       
      })

    })
  }

}
