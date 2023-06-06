import { PagesRegistryOptions } from "../options/page-registry.options";
import { DynamicRoutesModuleOptions } from "../options/module.options";

export function providePageRegistryOptions(options?: DynamicRoutesModuleOptions): PagesRegistryOptions {
    const _options = new PagesRegistryOptions();
    if (options) {
        _options.pages = options.pages;
    }
    return (_options);
}