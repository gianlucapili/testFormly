import { EnvironmentProviders, InjectionToken, Provider, Type } from "@angular/core";

export interface ComponentOptions {
    components: Type<any>[];
    providers?: Array<Provider | EnvironmentProviders>;
}
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ComponentOptions>("forRoot() Components configuration.");