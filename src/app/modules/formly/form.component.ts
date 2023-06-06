import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'rlb-form',
  standalone: true,
  imports: [FormlyModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [fields]="fields" [form]="form"></formly-form>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>`
})
export class FormComponent {

  form: FormGroup;

  @Output() OnSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() fields!: FormlyFieldConfig[]

  constructor() {
    this.form = new FormGroup({});
  }

  onSubmit() {
    this.OnSubmit.emit(this.form);
  }
}