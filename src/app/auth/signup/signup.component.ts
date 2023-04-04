import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNo:'',
 };

  constructor( private authServce: AuthService,
    private userService : UserService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.email==''||this.user.email==null)
    {
      alert('Email is required!!')
    }
    alert('submit');
  
    this.authServce.register(this.user).subscribe(
      (data)=>
      {
        alert("Success");
        this.router.navigateByUrl('auth/login')

      },
      (error)=>{
        console.log(error)
        alert("SOMETHING WENT WRONG");
      }
      
    );
  }

}
