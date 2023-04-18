import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/GlobalConstants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //   public user = {
  //     firstName:'',
  //     lastName:'',
  //     email:'',
  //     password:'',
  //     phoneNo:'',
  //  };
  password = true;
  signupForm: any = UntypedFormGroup
  responseMessage: any;



  constructor(private formBuilder: UntypedFormBuilder, private router: Router,
    private authServce: AuthService) {

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(GlobalConstants.firstNameRegex)]],
      lastName: [null, [Validators.required, Validators.pattern(GlobalConstants.lastNameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]],
      phoneNo: [null, [Validators.required, Validators.pattern(GlobalConstants.phoneNoRegex)]],
    })
  }  
  handleSubmit() {
    var formData = this.signupForm.value;    
    this.authServce.register(formData).subscribe((response)=> {
      {
        this.responseMessage = response?.message;
        

      } (error: { error: { message: any; }; }) => {
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        }
        else {
          this.responseMessage = GlobalConstants.genericError;
        }
      }
      this.router.navigateByUrl('auth/login')
    })
  }
}
