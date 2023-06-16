import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'rlb-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [fields]="fields" [form]="form"></formly-form>
      <button type="submit" [class]="colorClass">Submit</button>
    </form>`
})
export class RlbFormComponent {

  form: FormGroup;

  @Output() OnSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() fields!: FormlyFieldConfig[]
  @Input() color!: string

  constructor() {
    this.form = new FormGroup({});
  }

  public get colorClass() {
    if (this.color) return `btn btn-${this.color}`
    return `btn`
  }


  onSubmit() {
    this.OnSubmit.emit(this.form);
  }
}