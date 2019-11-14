import { FormGroup } from '@angular/forms';
import { Field } from './field.model';

export interface CustomForm {
  fg: FormGroup;
  fields: Field[];
  formHeader: string;
  formSubmit: string;
  redirectMsg: string;
  redirectLink: string;
  redirectTitle: string;
}
