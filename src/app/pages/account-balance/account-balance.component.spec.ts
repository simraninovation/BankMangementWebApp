import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AccountService } from '../../service/account-service.service';

import { AccountBalanceComponent } from './account-balance.component';
import { accountModel } from '../../model/account-model';
import { UserModel } from '../../model/user-model';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


let account : Array<accountModel>
let user : UserModel

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
  branch: 'test1',
  balance : 'test1',
  ifci : 'test1',
  name : 'test',
  userId :user

}]

describe('AccountBalanceComponent', () => {
  let component: AccountBalanceComponent;
  let fixture: ComponentFixture<AccountBalanceComponent>;
  let testAccountService : AccountService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBalanceComponent ],
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
    fixture = TestBed.createComponent(AccountBalanceComponent);
    component = fixture.componentInstance;
    testAccountService = TestBed.inject(AccountService);    
  });

  beforeEach(() => {
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should getAccountBalance on ngOnInit', () => {
    let spy =  jest.spyOn(testAccountService , 'getAccountDetails').mockImplementation(() => of(account));    
    component.rows = account
    component.ngOnInit();
    expect(spy).toBeCalled()   
    expect(component.rows).toEqual(account);
  
    
  });
});
