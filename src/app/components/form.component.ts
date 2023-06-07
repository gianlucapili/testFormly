import { Component, Input } from '@angular/core';
import { ComponentData } from '../modules';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  template: `
    <div class="card py-2 px-3">
      <rlb-form [fields]="data"></rlb-form>
    </div>
    `
})

export class RlbFormComponent implements ComponentData<FormlyFieldConfig[]> {
  @Input() data!: FormlyFieldConfig[];
}
