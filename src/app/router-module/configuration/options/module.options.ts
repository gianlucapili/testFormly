import { InjectionToken } from "@angular/core";
import { DynamicRoute } from "./dynamic-routes.options";
import { PagesRegistry } from "./page-registry.options";

export interface ComponentOptions extends DynamicRoute, PagesRegistry { }
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ComponentOptions>("forRoot() DynamicRouter configuration.");