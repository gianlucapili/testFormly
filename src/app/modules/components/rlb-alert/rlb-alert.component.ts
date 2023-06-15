import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { AbstractComponent } from '../core/abstract-component';
import { ComponentDirective } from '../core/component-module.directive';
import { RlbAlertData } from './rlb-alert.data';

@Component({
  template: `
    <ngb-alert [type]="data.type" [dismissible]="data.dismissible">
      {{data.text}}
      <ng-template component></ng-template>
    </ngb-alert>
  `
})
export class RlbAlertComponent extends AbstractComponent implements ComponentData<RlbAlertData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: RlbAlertData;
}