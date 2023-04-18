import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AccountService } from '../../service/account-service.service';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// const authService = jasmine.createSpyObj('AuthService',['register']);
// const accountService = jasmine.createSpyObj('AccountService',['getAccountDetails']);
// const userService = jasmine.createSpyObj('AccountService',['getAccountDetails']);

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
         
 
      ],
      imports:[
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientTestingModule ,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
       
        ReactiveFormsModule,
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
