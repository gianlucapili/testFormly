import { Component, Input, ViewChild } from '@angular/core';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from '../abstract-component';
import { ComponentDirective } from '../component-module.directive';

@Component({
  template: `
    <button type="{{data.type ?? 'button'}}" class="d-flex btn {{data.style ?? 'btn-primary'}}" 
            [disabled]="data.disabled ?? false" [autofocus]="data.autofocus ?? false">
      {{data.text}}
      <div class="ms-1" *ngIf="components && components.length > 0">
        <ng-template component></ng-template> 
      </div>
    </button>
  `
})
export class RlbButtonComponent extends AbstractComponent implements ComponentData {
  @Input() components: ComponentItem[] = [];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data: any;
}