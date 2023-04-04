
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountModel } from 'src/app/model/account-model';
import { UserModel } from '../../model/user-model';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData : Array<UserModel>
  userId =  0
  accountId =''
  loginData={
    email:'',
    password:'',
  };

  constructor(
    private authServce: AuthService,
    private userService : UserService,
    private accountService: AccountService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.authServce.getToken(this.loginData).subscribe(data =>{  
       localStorage.setItem('token',data.token)
       console.log(data)
       this.userService.getCurrentUserDetails(this.loginData.email).subscribe(userData =>{
        localStorage.setItem('user',JSON.stringify(userData))        
        console.log(".Id",userData)
          this.accountService.getAccountDetails( userData['id']).subscribe(accountData =>{         
                console.log("accountData",accountData)
            localStorage.setItem('accountId',JSON.stringify(accountData[0]['id']))
          
          })
        
        
        
       })
      this.router.navigateByUrl('app')
      })
  }

  public signUp(){
    this.router.navigateByUrl("auth/signup");
  }

}
