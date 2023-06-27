import { ComponentItem } from "../../component";
import { ComponentDirective } from "./component-module.directive";
import { Type, OnInit, Injectable } from '@angular/core';
import { RegistryService } from '../../services/registry/registry.service';
import { ScopeManagerService } from "../../services/scope/scope-manager.service";
import { ApisService } from "../../services/apis/apis.service";

class __InternalComponent__ {
	constructor(public component: Type<any>) { }
	public data: any
	public components?: ComponentItem[] = [];
	public $ref!: string | undefined;
}

@Injectable()
export abstract class AbstractComponent implements OnInit {
	abstract components: ComponentItem[]
	abstract component: ComponentDirective;
	public $ref!: string;

	constructor(
		protected registryService: RegistryService,
		protected scopeAccessor: ScopeManagerService,
		protected apisService: ApisService

	) { }

	ngOnInit(): void {
		this.loadComponent();
	}

	async loadComponent() {
		if (typeof this.component === 'undefined') return;
		if ((this.components?.length || 0) === 0) return;
		for (let component of this.components) {
			if (typeof component.$ref !== 'undefined') {
				if (component.apis) {
					const apis = await this.apisService.loadApis(component.apis)
					Object.assign(component.data, { apis })
				}
				this.scopeAccessor.pushComponent(component.$ref, component.data)
			}
			if (component.name) {
				const componentType = this.registryService.get(component.name) as Type<any>;
				const componentRef = this.component.viewContainerRef.createComponent<__InternalComponent__>(componentType);
				componentRef.instance.data = component.data;
				componentRef.instance.components = component.components || [];
				componentRef.instance.$ref = component.$ref;
			}
		}
	}
}