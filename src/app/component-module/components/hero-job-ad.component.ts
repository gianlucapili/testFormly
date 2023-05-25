import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
  <div class="my-2" style="border: 1px solid black;">
    <div style="background-color: lightblue;">
      <h4>{{data.headline}}</h4>
        {{data.body}}
    </div>
    <div class="mt-1">
      <ng-template component></ng-template>      
    </div>
  </div>
  `
})
export class HeroJobAdComponent extends AbstractComponent implements ComponentData {
  @Input() components: ComponentItem[] = [];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data: any;
}