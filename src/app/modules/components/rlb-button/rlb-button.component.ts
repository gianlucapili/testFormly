import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../../component';
import { ComponentDirective } from '../core/component-module.directive';
import { RlbButtonData } from './rlb-button.data';
import { AbstractActionComponent } from '../core/abstract-action.component';

@Component({
  template: `
    <ng-container *ngIf="isUrl; else button">
      <button type="button" class="btn btn-primary" 
              [disabled]="data.disabled"
              [ngbTooltip]="data.tooltip"
              [routerLink]="navigationData.path | async" [queryParams]="navigationData.qParams |async">
        {{data.text}}
      </button>
    </ng-container>
    <ng-template #button>
      <button type="button" 
              class="btn btn-primary" 
              [disabled]="data.disabled || loading"
              [ngbTooltip]="data.tooltip"
              (click)="execute($event)">
        <span *ngIf="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        {{data.text}}
      </button>
    </ng-template>
  `
})
export class RlbButtonComponent extends AbstractActionComponent implements ComponentData<RlbButtonData> {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() override data!: RlbButtonData;
}