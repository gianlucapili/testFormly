import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { ComponentDirective } from '../core/component-module.directive';
import { AbstractActionComponent } from '../core/abstract-action.component';
import { RlbLinkData } from './rlb-link.data';

@Component({
  template: `
    <ng-container *ngIf="isUrl; else button">
      <a class="link-primary" [ngbTooltip]="data.tooltip" 
          [routerLink]="navigationData.path | async" [queryParams]="navigationData.qParams |async">
        {{data.text}}
      </a>
    </ng-container>
    <ng-template #button>
      <a class="link-primary" [ngbTooltip]="data.tooltip" (click)="execute($event)">
        {{data.text}}
      </a>
    </ng-template>
  `
})
export class RlbLinkComponent extends AbstractActionComponent implements ComponentData<RlbLinkData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() override data!: RlbLinkData;
}