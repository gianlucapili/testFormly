import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';

@Component({
  template: `
    <button type="button" class="btn-close" aria-label="Close" [disabled]="data.disabled"></button>
  `
})
export class RlbCloseButtonComponent implements ComponentData {
  @Input() data!: any;
}