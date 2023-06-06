import { DynamicRoutesModuleOptions } from "../options/module.options";
import { DynamicRoutesOptions } from "../options/dynamic-routes.options";

export function provideDynamicRoutesOptions(options?: DynamicRoutesModuleOptions): DynamicRoutesOptions {
    const _options = new DynamicRoutesOptions();
    if (options) {
        _options.routes = options.routes;
        _options.notFound = options.notFound;
    }
    return (_options);
}