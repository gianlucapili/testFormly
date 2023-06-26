import { BusinessFunctionsOptions, DynamicRoutesOptions, ModuleOptions } from "../options";

export function provideBusinessFunctionsOptions(options?: ModuleOptions): BusinessFunctionsOptions {
    const _options = new BusinessFunctionsOptions();
    if (options) {
        _options.businessFunctions = options.businessFunctions;
    }
    return (_options);
}