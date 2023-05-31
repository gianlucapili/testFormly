import { Component, Input } from '@angular/core';
import { ComponentData } from '../../component';
import { RlbSpinnerData } from './rlb-spinner.data';

@Component({
  template: `
    <div [ngClass]="[format, color]" role="status">
      <span class="visually-hidden">{{data.text}}</span>
    </div>
  `
})
export class RlbSpinnerComponent implements ComponentData<RlbSpinnerData> {
  @Input() data!: RlbSpinnerData;

  get format(): string {
    return `spinner-${this.data.format ?? 'border'}`;
  }

  get color(): string | undefined {
    if (!!this.data.type) return
    return `spinner-${this.data.type ?? 'border'}`;
  }

}