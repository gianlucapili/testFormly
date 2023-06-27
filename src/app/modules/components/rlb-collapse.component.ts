import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from './core/abstract.component';
import { ComponentDirective } from './core/component-module.directive';


@Component({
  template: `
    <p>
      <button type="button" class="btn {{data.style ?? 'btn-outline-primary'}}" (click)="isCollapsed = !isCollapsed"
        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
        {{data.button}}
      </button>
    </p>
    <div id="collapseExample" [ngbCollapse]="isCollapsed">
      <div class="card">
        <div class="card-body">
          {{data.message}}
          <ng-template component></ng-template>
        </div>
      </div>
    </div>
  `
})
export class RlbCollapseComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;

  public isCollapsed = true;
}