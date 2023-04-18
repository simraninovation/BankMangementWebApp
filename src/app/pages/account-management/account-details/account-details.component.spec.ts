import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { accountModel } from '../../../model/account-model';
import { UserModel } from '../../../model/user-model';
import { AccountService } from '../../../service/account-service.service';
import { of } from 'rxjs';

import { AccountDetailsComponent } from './account-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// const accountService = jasmine.createSpyObj('AccountService',['getAccountDetails']);
let account : Array<accountModel>
let user : UserModel
let accountService: any

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

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;
  let testAccountService : AccountService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsComponent ],
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
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    testAccountService = TestBed.inject(AccountService);        
  });

  beforeEach(() => {
    
   
    fixture.detectChanges();
  });

  it('should create details', () => {
    expect(component).toBeTruthy();
  });

  it('should getAccountDetails on ngOnInit', () => {
    let spy =  jest.spyOn(testAccountService , 'getAccountDetails').mockImplementation(() => of(account));    
    component.accountsData = account
    component.ngOnInit();
    expect(spy).toBeCalled()
    expect(component.isloading).toBeTruthy
    expect(component.accountsData).toEqual(account);
    expect(component.isloading).toBeFalsy
    
  });
});
