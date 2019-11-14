import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomForm, Field } from '../core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  @Input() customForm: CustomForm;
  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter();
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit(){
    this.submitted.emit(this.customForm.fg);
  }

  redirectTo() {
    this.router.navigateByUrl(this.customForm.redirectLink);
  }

}
