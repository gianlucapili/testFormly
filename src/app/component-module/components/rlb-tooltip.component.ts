import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <button type="{{data.type ?? 'button'}}" class="btn {{data.style ?? 'btn-primary'}}" 
            [disabled]="data.disabled ?? false" [autofocus]="data.autofocus ?? false">
      {{data.text}}
    </button>
    <rlb-components-container [components]="data.innerComponents"></rlb-components-container>
  `
})
export class RlbTooltipComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;
}