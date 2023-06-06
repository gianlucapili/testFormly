import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { AbstractComponent } from '../../abstract-component';
import { ComponentDirective } from '../../component-module.directive';
import { RlbButtonData } from './rlb-button.data';

@Component({
  template: `
    <button type="button" 
            class="d-flex btn btn-primary" 
            [disabled]="data.disabled || data.loading"
            [ngbTooltip]="data.tooltip">
      <span *ngIf="data.loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      {{data.text}}
    </button>
  `
})
export class RlbButtonComponent extends AbstractComponent implements ComponentData<RlbButtonData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: RlbButtonData;
}