import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ComponentDirective } from './component-module.directive';
import { ComItem } from './component';

@Component({
    selector: 'rlb-components-container',
    template: `
    <div>
      <ng-template component></ng-template>
    </div>
  `
})
export class ComponentsContainerComponent implements OnInit {
    @Input() components: ComItem[] = [];

    @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;

       ngOnInit(): void {
        this.loadComponent();
    }

    loadComponent() {
        const viewContainerRef = this.component.viewContainerRef;
        for(let component of this.components) {
            const componentRef = viewContainerRef.createComponent<ComItem>(component.component);
            componentRef.instance.data = component.data;
        }
    }
}