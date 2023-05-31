import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <ngb-alert [type]="data.type" [dismissible]="data.dismissible">
      {{data.message}}
      <ng-template component></ng-template>
    </ngb-alert>
  `
})
export class RlbAlertComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;
}