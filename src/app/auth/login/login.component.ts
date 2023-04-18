
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountModel } from '../../model/account-model';
import { UserModel } from '../../model/user-model';
import { AccountService } from '../../service/account-service.service';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GlobalConstants} from '../../shared/GlobalConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: any = UntypedFormGroup;
  responseMessage: any;
  dialogRef: any;

  constructor(
    private authServce: AuthService,
    private userService: UserService,
    private accountService: AccountService,
    private router: Router,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]]

    })

  }


  formSubmit() {
    var formData = this.loginForm.value;  
    this.authServce.getToken(formData).subscribe(data => {
      this.responseMessage = data?.message;
      localStorage.setItem('token', data.token)
      
      this.userService.getCurrentUserDetails(formData.email).subscribe(userData => {
        console.log(formData.email)        
        console.log(userData)
        let Id = userData['id']
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(".Id",Id)        
        this.accountService.getAccountDetails(Id).subscribe(accountData => {
          if(accountData == null || accountData == undefined || accountData.length==0){
            alert("Error: Account Not Avaliable for User")
            this.router.navigateByUrl('auth/login')
          }
          else{
            console.log("accountData", accountData)
            let accountId = accountData[0]['id']
            localStorage.setItem('accountId', JSON.stringify(accountId))  
          }
          
        })



      })

    }, error => {
      this.responseMessage = error.error?.message;
    },
      () => {
        this.router.navigateByUrl('app')
      }
    )
  }

  public signUp() {
    this.router.navigateByUrl("auth/signup");
  }


}
