import { DynamicRoutesOptions, ModuleOptions } from "../options";


export function provideDynamicRoutesOptions(options?: ModuleOptions): DynamicRoutesOptions {
    const _options = new DynamicRoutesOptions();
    if (options) {
        _options.routes = options.routes;
        _options.notFound = options.notFound;
    }
    return (_options);
}