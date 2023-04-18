import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from '../../../service/account-service.service';
import { accountModel } from '../../../model/account-model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  rows: Array<accountModel>
  dataSource : any
  accountsData:any;
  isloading = true
  constructor(private accountService : AccountService) { }

  ngOnInit() {
    let userId = localStorage.getItem('user');
    if(userId != null){
      userId = JSON.parse(userId).id   
    }
    console.log(userId)
    this.accountService.getAccountDetails(userId).subscribe(data =>{
    this.isloading= false
    //  this.dataSource = new MatTableDataSource<accountModel>(data);
  
     this.rows = data
     console.log(this.rows)
   
    })
  }

}

