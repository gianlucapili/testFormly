import { ComponentItem } from "./component";
import { ComponentDirective } from "./component-module.directive";
import { Type, OnInit, Injectable } from '@angular/core';
import { RegistryService } from './services/registry/registry.service';

class __InternalComponent__ {
    constructor(public component: Type<any>, public data: any) { }
    public components?: ComponentItem[] = [];
}

@Injectable()
export abstract class AbstractComponent implements OnInit {
    abstract components: ComponentItem[]
    abstract component: ComponentDirective;

    constructor(private registryService: RegistryService) { }

    ngOnInit(): void {
        this.loadComponent();
    }

    loadComponent() {
        if (typeof this.component === 'undefined') return;
        if ((this.components?.length || 0) === 0) return;
        for (let component of this.components) {
            const componentType = this.registryService.get(component.name);
            const componentRef = this.component.viewContainerRef.createComponent<__InternalComponent__>(componentType);
            componentRef.instance.data = component.data;
            componentRef.instance.components = component.components || [];
        }
    }
}