import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';

@Component({
  template: `
    <div class="spinner-{{data.type ?? 'border'}} text-{{data.color ?? 'primary'}}" role="status">
      <span class="visually-hidden">{{data.message ?? 'Loading...'}}</span>
    </div>
  `
})
export class RlbSpinnerComponent implements ComponentData {
  @Input() data!: any;
}