import { Component, Input } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ComponentData } from '../modules/component/component';


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
