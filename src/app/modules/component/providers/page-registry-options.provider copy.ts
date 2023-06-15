import { PagesRegistryOptions } from "../options/routes/page-registry.options";
import { ModuleOptions } from "../options/dynamic-routes-options";

export function providePageRegistryOptions(options?: ModuleOptions): PagesRegistryOptions {
    const _options = new PagesRegistryOptions();
    if (options) {
        _options.pages = options.pages;
    }
    return (_options);
}