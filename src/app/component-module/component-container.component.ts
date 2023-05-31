import { Component, Input, Type, OnInit, ViewChild } from '@angular/core';
import { ComponentDirective } from './component-module.directive';
import { ComponentItem } from './component';
import { AbstractComponent } from './abstract-component';


@Component({
  selector: 'rlb-components-container',
  template: `<ng-template component></ng-template>`
})
export class ComponentsContainerComponent extends AbstractComponent {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
}