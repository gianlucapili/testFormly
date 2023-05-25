import { Component, Input, Type, OnInit, ViewChild } from '@angular/core';
import { ComponentDirective } from './component-module.directive';
import { ComponentItem } from './component';
import { RegistryService } from './services/registry/registry.service';

class __InternalComponent__ {
  constructor(public component: Type<any>, public data: any) { }
}

@Component({
  selector: 'rlb-components-container',
  template: `
    <div>
      <ng-template component></ng-template>
    </div>
  `
})
export class ComponentsContainerComponent implements OnInit {
  @Input() components: ComponentItem[] = [];

  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;

  constructor(private registryService: RegistryService) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.component.viewContainerRef;
    for (let component of this.components) {
      const componentType = this.registryService.get(component.name);
      const componentRef = viewContainerRef.createComponent<__InternalComponent__>(componentType);
      componentRef.instance.data = component.data;
    }
  }
}