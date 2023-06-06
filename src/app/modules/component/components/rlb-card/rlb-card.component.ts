import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { AbstractComponent } from '../../abstract-component';
import { ComponentDirective } from '../../component-module.directive';
import { RlbCardData } from './rlb-card.data';

@Component({
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="data.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{data.title}}</h5>
        <p class="card-text">{{data.text}}</p>
        <ng-template component></ng-template>
      </div>
    </div>
  `
})
export class RlbCardComponent extends AbstractComponent implements ComponentData<RlbCardData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: RlbCardData;
}