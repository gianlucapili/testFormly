import { EnvironmentProviders, Provider, Type } from "@angular/core";

export interface ComponentOptions {
    components: Type<any>[];
    providers?: Array<Provider | EnvironmentProviders>;
}
