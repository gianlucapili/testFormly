import { PagesRegistryOptions } from "../options/page-registry.options";
import { ComponentOptions } from "../options/module.options";

export function providePageRegistryOptions(options?: ComponentOptions): PagesRegistryOptions {
    const _options = new PagesRegistryOptions();
    if (options) {
        _options.pages = options.pages;
    }
    return (_options);
}