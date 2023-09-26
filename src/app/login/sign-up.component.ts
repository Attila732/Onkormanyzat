import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']

})
export class SignUpComponent {
  title = 'Onkormanyzat';
  login=new FormGroup({
    userName01:new FormControl(''),
    email01:new FormControl(''),
    password01:new FormControl('')
  });



  signup=new FormGroup({
    userName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
});
      

  

  

  
  signUp() {
    // console.log(this.signUp.userName, this.signUp.email, this.signUp.password);
    console.log(this.signup.getRawValue());

  }
  logIn(){

    console.log(this.login.getRawValue());
    // console.log(this.login.email01,this.password01);
  }
}
