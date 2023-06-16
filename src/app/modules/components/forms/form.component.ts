import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ComponentData } from '../../component';
import { FormData } from './form-data';

@Component({
  selector: 'rlb-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [fields]="fields" [form]="form"></formly-form>
      <button type="submit" [class]="colorClass">{{ data.button | scoped | async }}</button>
    </form>`
})
export class RlbFormComponent implements ComponentData<FormData> {
  @Input() data!: FormData;
  @Output() OnSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  $ref?: string | undefined;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  public get colorClass() {
    if (this.data.color) return `btn btn-${this.data.color}`
    return `btn`
  }

  public get fields(): FormlyFieldConfig[] {
    return this.data.fields
  }

  onSubmit() {
    this.OnSubmit.emit(this.form);
  }
}