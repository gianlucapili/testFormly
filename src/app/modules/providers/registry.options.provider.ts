import { ModuleOptions, RegistryOptions } from "../options";

export function provideRegistryOptions(options?: ModuleOptions): RegistryOptions {
    var registryOptions = new RegistryOptions();
    if (options) {
        registryOptions.components = options.components;
    }
    return (registryOptions);
}
