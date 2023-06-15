import { ModuleOptions, PagesRegistryOptions } from "../options";


export function providePageRegistryOptions(options?: ModuleOptions): PagesRegistryOptions {
    const _options = new PagesRegistryOptions();
    if (options) {
        _options.pages = options.pages;
    }
    return (_options);
}