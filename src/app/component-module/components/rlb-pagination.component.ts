import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <ngb-pagination [collectionSize]="data.collectionSize" 
      [(page)]="data.page" [maxSize]="data.maxSize" 
      [rotate]="data.rotate ?? true" [ellipses]="data.ellipses ?? false" [boundaryLinks]="data.boundaryLinks ?? true">
      <ng-template component></ng-template>
    </ngb-pagination>
  `
})
export class RlbPaginationComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;
}
