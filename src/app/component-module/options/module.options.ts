import { InjectionToken, Type } from "@angular/core";

export interface ComponentOptions {
    componets: Type<any>[];
}
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ComponentOptions>("forRoot() Components configuration.");