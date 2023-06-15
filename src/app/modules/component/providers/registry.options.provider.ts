import { ModuleOptions } from "../options/dynamic-routes-options";
import { RegistryOptions } from "../services/registry/registry.options";

export function provideRegistryOptions(options?: ModuleOptions): RegistryOptions {
    var registryOptions = new RegistryOptions();
    if (options) {
        registryOptions.components = options.components;
    }
    return (registryOptions);
}
