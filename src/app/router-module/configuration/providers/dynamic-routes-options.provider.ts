import { ComponentOptions } from "../options/module.options";
import { DynamicRoutesOptions } from "../options/dynamic-routes.options";

export function provideDynamicRoutesOptions(options?: ComponentOptions): DynamicRoutesOptions {
    const _options = new DynamicRoutesOptions();
    if (options) {
        _options.routes = options.routes;
    }
    return (_options);
}