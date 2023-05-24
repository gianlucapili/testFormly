import { AbstractControl, ValidationErrors } from '@angular/forms';

export function FieldMatchValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.get('email');
  const confirmEmail = control.get('confirmEmail');

  if (email && confirmEmail && email.value !== confirmEmail.value) {
    return { 'fieldMatch': true };
  }
  return null;
}