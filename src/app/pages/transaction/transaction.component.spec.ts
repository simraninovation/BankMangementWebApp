import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionService } from '../../service/transaction.service';
import { AccountService } from '../../service/account-service.service';
import { TransactionComponent } from './transaction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { accountModel } from '../../model/account-model';
import { UserModel } from '../../model/user-model';

import { of } from 'rxjs';
import { transactionModel } from '../../model/transaction-model';

// const accountService = jasmine.createSpyObj('AccountService',['getAccountDetails']);
// const transactionService = jasmine.createSpyObj('TransactionService',['gettransactionDetails']);
let accountService : any
let transactionService: any

let account : Array<accountModel>
let user : UserModel
let transaction : Array<transactionModel>

user = {
  id: '1',
  FirstName: 'test',
  LastName: 'test',
  Email: 'test@test.com',
  PhoneNo: 'test'
}

account = [{
  id: '1',
  accountNumber: '12345',
  branch: 'test',
  balance : 'test',
  ifci : 'test',
  name : 'test',
  userId :user

}]
transaction = [{
  message: "Test Message",
  amount:"100",
  createdDate:'01-02-2021',      
  accountId:{
    account : account
  }

 
}]

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
  let testAccountService : AccountService;
  let testTransactionService : TransactionService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      providers:[
        AccountService,
        TransactionService 
      ],
      imports:[
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientTestingModule ,
        RouterTestingModule, 
         
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    testAccountService = TestBed.inject(AccountService)
    testTransactionService = TestBed.inject(TransactionService)
        
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get account and transactons on ngOnInit', () => {
    let spyDetails  = jest.spyOn(testAccountService , 'getAccountDetails').mockImplementation(() => of(account));
    let spyTransactions  = jest.spyOn(testTransactionService , 'gettransactionDetails').mockImplementation(() => of(transaction));
    
    component.ngOnInit
    component.rows = transaction;
    component.ngOnInit();
    expect(spyDetails).toBeCalled();
    expect(spyTransactions).toBeCalled();
    expect(component.rows).toEqual(transaction)
  
  });
});
