import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomForm, Field } from '../core';
import userData from '../user-data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginCustomForm: CustomForm;
  fields: Field[];
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.fields = [
      { placeHolder: 'Email', type: 'email', formControlName: 'email' },
      { placeHolder: 'Password', type: 'password', formControlName: 'password' }
    ];
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
    this.loginCustomForm = {
      fg : this.loginForm,
      fields : this.fields,
      formHeader : 'HAVE AN ACCOUNT? JUST SIGN IN!',
      formSubmit : 'SIGN IN',
      redirectMsg : 'Don\'t have an account?',
      redirectTitle : 'SIGN UP',
      redirectLink : '/signup'
    };
   }

  ngOnInit() {
  }

  formSubmitted(fg: FormGroup) {
    if (fg.valid) {
      const userCred = {
        user: fg.value
      };
      let flag = 0;
      let name: string;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === userCred.user.email && userData[i].password === userCred.user.password) {
          flag = 1;
          name = userData[i].name;
          break;
        }
      }
      if (flag === 0) {
        alert('Incorrect email address/password');
      } else {
        console.log(name);
        this.router.navigate(['experience', name]);
      }
    }
  }
}
