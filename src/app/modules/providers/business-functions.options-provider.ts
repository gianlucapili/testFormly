import { BusinessFunctionsOptions, DynamicRoutesOptions, ModuleOptions } from "../options";

export function provideBusinessFunctionsOptions(options?: ModuleOptions): BusinessFunctionsOptions {
    const _options = new BusinessFunctionsOptions();
    if (options) {
        _options.functions = options.functions;
    }
    return (_options);
}