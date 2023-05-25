import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import formDef from '../form-definition.json'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormlyModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [fields]="fields" [form]="form"></formly-form>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>`
})
export class TestComponent {

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = formDef as FormlyFieldConfig[];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}