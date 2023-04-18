import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AccountService } from '../../service/account-service.service';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { accountModel } from '../../model/account-model';
import { UserModel } from '../../model/user-model';

import { TransferFundComponent } from './transfer-fund.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
// const accountService = jasmine.createSpyObj('AccountService',['getAccountDetails','getAccountByNumber','getAccountById','updateAccountBalance']);


let account : Array<accountModel>
let user : UserModel
let accountService:any

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

describe('TransferFundComponent', () => {
  let component: TransferFundComponent;
  let fixture: ComponentFixture<TransferFundComponent>;
  let accountTestService : AccountService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFundComponent ],
      providers:[
        AccountService       
      ],
      imports:[
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientTestingModule ,
        RouterTestingModule, 
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule
      ]
    })
    .compileComponents();
    accountTestService = TestBed.inject(AccountService)
    fixture = TestBed.createComponent(TransferFundComponent);
    component = fixture.componentInstance;

  });

  beforeEach(() => {
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should throw error when Account number not found', () => {
    jest.spyOn(accountTestService , 'getAccountDetails').mockImplementation(() => of(account));
    jest.spyOn(accountTestService , 'getAccountByNumber').mockImplementation(() => of());
    jest.spyOn(accountTestService , 'getAccountById').mockImplementation(() => of(account)); 
    // account.accountNumber="1"
    component.error = "Account Number Not Found"
    let values = {
      AccountNumber: '1',
      IFSC: 'test',
      Amount: '100'
    }
    component.fund = values
    component.formSubmit()
    expect(component.error).toEqual("Account Number Not Found")
  });

  it('should should call services', () => {
    let spyUpdate  = jest.spyOn(accountTestService , 'getAccountDetails').mockImplementation(() => of(account));
    let spyActNumber =  jest.spyOn(accountTestService , 'getAccountByNumber').mockImplementation(() => of(account));
    let spyAcctById = jest.spyOn(accountTestService , 'getAccountById').mockImplementation(() => of(account)); 
    // account.accountNumber="1"
    
    let values = {
      AccountNumber: '1',
      IFSC: 'test',
      Amount: '100'
    }
    let data ={
      "id": "1",
      "balance":"123"
    }
    component.fund = values
    component.formSubmit()
    expect(spyActNumber).toBeCalledWith(values.AccountNumber);
    expect(spyAcctById).toBeCalled();
    
  });



});
