import { InjectionToken } from "@angular/core";
import { DynamicRoute } from "src/app/modules/component/options/routes/dynamic-route";
import { PagesRegistry } from "src/app/modules/component/options/routes/pages-registry";
import { ComponentOptions } from "./components/components-options";

export interface ModuleOptions extends DynamicRoute, PagesRegistry, ComponentOptions { }
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>("forRoot() Components configuration.");