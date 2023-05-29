import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <button type="button" class="btn {{data.class ?? 'btn-outline-primary'}}" ngbTooltip="{{data.tooltip}}" placement="top">
      {{data.button}}
      <ng-template component></ng-template>
    </button>
  `
})
export class RlbTooltipComponent extends AbstractComponent implements ComponentData {
  @Input() components: ComponentItem[] = [];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data: any;
}