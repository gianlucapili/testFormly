import { Component, Input } from '@angular/core';
import { ComponentData } from '../component';

@Component({
  template: `
    <span 
      class="badge {{data.roundedPill ? 'rounded-pill' : ''}} text-bg-{{data.background ?? 'primary' }}">
      {{data.text}}
    </span>
  `
})
export class RlbBadgeComponent implements ComponentData {
  @Input() data!: any;
}