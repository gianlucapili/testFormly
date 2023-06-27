import { OnInit, Injectable, Input } from '@angular/core';
import { RegistryService } from '../../services/registry/registry.service';
import { ScopeManagerService } from "../../services/scope/scope-manager.service";
import { ApisService } from "../../services/apis/apis.service";
import { AbstractComponent } from "./abstract.component";
import { ComponentData } from '../../component';
import { Router } from '@angular/router';
import { BusinessFunctionsService } from '../../services';
import { isObservable, lastValueFrom } from 'rxjs';
import { RlbActionData } from '../rlb-button/rlb-action.data';

@Injectable()
export abstract class AbstractActionComponent extends AbstractComponent implements OnInit, ComponentData<RlbActionData> {

	@Input() data!: RlbActionData;
	private _loading: boolean = false;
	private _navigationData!: {
		path: Promise<string[]>,
		qParams: Promise<{ [k: string]: string }>
	}

	constructor(
		registryService: RegistryService,
		scopeAccessor: ScopeManagerService,
		apisService: ApisService,
		protected router: Router,
		protected businessFunctionsService: BusinessFunctionsService,
	) {
		super(registryService, scopeAccessor, apisService);
	}

	override ngOnInit() {
		super.ngOnInit();
		if (this.data.navigate && this.data.function) {
			throw new Error("Cannot have both navigate and function defined");
		}
		if (!this.data.navigate && !this.data.function) {
			throw new Error("Must have either navigate or function defined");
		}
		if (this.data.navigate) {
			const path = [this.data.navigate.path, ...(this.data.navigate?.uParams || [])];
			this._navigationData = {
				path: Promise.all(path.map(async p => await this.scopeAccessor.resolveString(p))),
				qParams: this.scopeAccessor.resolveStringObject(this.data.navigate.qParams || {})
			}
		}
	}

	get navigationData() {
		return this._navigationData;
	}

	get loading(): boolean {
		return this._loading;
	}

	get isUrl(): boolean {
		return this.data.navigate !== undefined;
	}

	public async execute(event: MouseEvent) {
		if (this.data.function) {
			this._loading = true;
			const fn = this.businessFunctionsService.get(this.data.function);
			if (fn) {
				const _result = fn();
				let result: any;
				if (isObservable(_result)) {
					result = await lastValueFrom(_result);
				} else if (typeof _result === 'object' && typeof _result.then === 'function') {
					result = await _result;
				} else {
					result = _result;
				}
				super.scopeAccessor.pushComponent(this.$ref, { data: result });
			}
			this._loading = false;
		}
	}

}