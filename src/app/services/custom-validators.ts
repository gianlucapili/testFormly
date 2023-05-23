import { AbstractControl, ValidationErrors, FormGroup, FormControl, ValidatorFn  } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

export function ConfirmEmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.get('email');
  const confirmEmail = control.get('confirmEmail');

  return email && confirmEmail && email.value === confirmEmail.value ? null : { 'confirmEmail': true };
}

export function FieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;
  console.log(password, passwordConfirm, control.value);

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}
