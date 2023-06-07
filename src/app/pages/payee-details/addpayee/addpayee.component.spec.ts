 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpayeeComponent } from './addpayee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MatDialogRef } from '@angular/material/dialog';
import { PayeeDetailsService } from '../../../service/payee-details.service';
import { HttpClientModule } from '@angular/common/http';
//import { PayeeDetailsService } from 'src/app/service/payee-details.service';

describe('AddpayeeComponent', () => {
  let component: AddpayeeComponent;
  let fixture: ComponentFixture<AddpayeeComponent>;
  let ref: MdbModalRef<AddpayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpayeeComponent ],
      providers: [{provide: MdbModalRef, useValue: ref} , PayeeDetailsService,],
      imports:[
         ReactiveFormsModule,
         HttpClientModule
         
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
