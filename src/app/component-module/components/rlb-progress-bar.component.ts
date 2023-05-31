import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <ngb-progressbar [value]="data.value" [type]="data.type ?? 'success'" 
      [striped]="data.striped ?? true" [animated]="data.animated ?? false" 
      [showValue]="data.showValue ?? false" [height]="data.height">
      {{data.text}}
      <ng-template component></ng-template>
    </ngb-progressbar>
  `
})
export class RlbProgressBarComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;
}