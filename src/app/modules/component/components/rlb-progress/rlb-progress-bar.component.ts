import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { AbstractComponent } from '../../abstract-component';
import { ComponentDirective } from '../../component-module.directive';
import { RlbProgressData } from './rlb-progress-bar.data';

@Component({
  template: `
    <ngb-progressbar 
      [value]="data.value" 
      [type]="data.type"
      [animated]="true"
      [showValue]="true">
      {{data.text}}
    </ngb-progressbar>
  `
})
export class RlbProgressBarComponent extends AbstractComponent implements ComponentData<RlbProgressData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: RlbProgressData;
}