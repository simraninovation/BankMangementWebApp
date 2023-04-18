import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app.routing';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './service/account-service.service';




import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavbarComponent } from './pages/front-page/navbar/navbar.component';
import { BannerComponent } from './pages/front-page/banner/banner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from './service/auth.service';
import { TransferFundComponent } from './pages/transfer-fund/transfer-fund.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddpayeeComponent } from './pages/payee-details/addpayee/addpayee.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    
    FrontPageComponent,
    NavbarComponent,
    BannerComponent,
    TransferFundComponent,
  
   
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule, 
    HttpClientModule,
    Routing,
    MatTableModule,
    FormsModule,
    // NgModule,
    ReactiveFormsModule,
    MatDialogModule
    
    
    


  ],
  exports: [
    
    MatFormFieldModule,
    
  ],
  providers: [
    AccountService,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
