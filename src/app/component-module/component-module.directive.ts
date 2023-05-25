import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component]',
})
export class ComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}