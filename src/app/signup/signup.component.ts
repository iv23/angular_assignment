import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomForm, Field } from '../core';
import userData from '../user-data.json';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpCustomForm: CustomForm;
  fields: Field[];
  constructor(private formBuilder: FormBuilder) {
    this.fields = [
      { placeHolder: 'Email', type: 'email', formControlName: 'email' },
      { placeHolder: 'Name', type: 'text', formControlName: 'name' },
      { placeHolder: 'Password', type: 'password', formControlName: 'password' }
    ];
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
    this.signUpCustomForm = {
      fg : this.signUpForm,
      fields : this.fields,
      formHeader : 'SIGN UP & GET STARTED',
      formSubmit : 'SIGN UP',
      redirectMsg : 'Already have an account?',
      redirectTitle : 'SIGN IN',
      redirectLink : '/login'
    };
   }

  ngOnInit() {
  }

  formSubmitted(fg: FormGroup) {
    if (fg.valid) {
      const newUserCred = {
        user: fg.value
      };
      let flag = 0;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].name === newUserCred.user.name) {
          flag = 1;
          break;
        } else if (userData[i].email === newUserCred.user.email) {
          flag = 2;
          break;
        }
      }
      let msg: string;
      if (flag === 0) {
        // tslint:disable-next-line: max-line-length
        msg = 'Welcome '.concat(newUserCred.user.name).concat(' you have successfully signed up with the Email Address - ').concat(newUserCred.user.email);
        alert(msg);
      } else if (flag === 1) {
        msg = 'Username '.concat(newUserCred.user.name).concat(' already exists!');
        alert(msg);
      } else if (flag === 2) {
        msg = 'Email address '.concat(newUserCred.user.email).concat(' already exists!');
        alert(msg);
      }
    }
  }

}
