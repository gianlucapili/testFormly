import { RegistryOptions } from "../services/registry/registry.options";
import { ComponentOptions } from "./module.options";

export function provideRegistryOptions(options?: ComponentOptions): RegistryOptions {
    var registryOptions = new RegistryOptions();
    if (options) {
        registryOptions.components = options.componets;
    }
    return (registryOptions);
}
