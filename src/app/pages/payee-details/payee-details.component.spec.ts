
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PayeeDetailsService } from '../../service/payee-details.service';
import { AccountService } from '../../service/account-service.service';
import { PayeeDetailsComponent } from './payee-details.component';
import { accountModel } from '../../model/account-model';
import { UserModel } from '../../model/user-model';
import { PayeeDetails } from '../../model/payeeDetails-module';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';



let account : Array<accountModel>
let user : UserModel
let payee: Array<PayeeDetails>

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
payee = [{
  accountNumber : "123",
  ifsc: "BK01112675",
  name: "test",
  accountId: account

}]

describe('PayeeDetailsComponent', () => {
  let component: PayeeDetailsComponent;
  let fixture: ComponentFixture<PayeeDetailsComponent>;
  let accountTestService : AccountService
  let payeeTest : PayeeDetailsService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeDetailsComponent ],
      providers:[
        AccountService,
        PayeeDetailsService 
      ],
      imports:[
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientTestingModule
        
      
       
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PayeeDetailsComponent);
    accountTestService = TestBed.inject(AccountService);
    payeeTest = TestBed.inject(PayeeDetailsService)
    jest.spyOn(accountTestService , 'getAccountDetails').mockImplementation(() => of(account));
    jest.spyOn(payeeTest , 'gettPayeeDetails').mockReturnValue(of(payee))
    component = fixture.componentInstance;

    
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should PayeeDetails on ngOnInit', () => {       
    let spy =  jest.spyOn(payeeTest , 'gettPayeeDetails').mockImplementation(() => of(payee));
    component.rows = payee;
    component.ngOnInit();
    expect(spy).toBeCalled();
    expect(component.rows).toEqual(payee)
  });
});
