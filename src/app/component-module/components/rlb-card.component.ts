import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="data.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{data.title}}</h5>
        <p class="card-text">{{data.text}}</p>
        <ng-template component></ng-template>
      </div>
      <div class="card-footer" *ngIf="data.footerComponents">
        <rlb-components-container [components]="data.footerComponents"></rlb-components-container>
      </div>
    </div>
  `
})
export class RlbCardComponent extends AbstractComponent implements ComponentData {
  @Input() components: ComponentItem[] = [];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data: any;
}