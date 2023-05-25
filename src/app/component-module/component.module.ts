import { NgModule, ModuleWithProviders } from "@angular/core";
import { ComponentsContainerComponent } from "./component-container.component";
import { HeroJobAdComponent } from "./components/hero-job-ad.component";
import { HeroProfileComponent } from "./components/hero-profile.component";
import { ComponentDirective } from "./component-module.directive";
import { RegistryOptions } from "./services/registry/registry.options";
import { ComponentOptions, FOR_ROOT_OPTIONS_TOKEN } from "./options/module.options";
import { provideRegistryOptions } from "./options/registry.options.provider";

@NgModule({
  declarations: [
    ComponentsContainerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    ComponentDirective
  ],
  imports: [],
  exports: [
    ComponentsContainerComponent,
  ],
})
export class ComponentModule {
  static forRoot(options?: ComponentOptions): ModuleWithProviders<ComponentModule> {
    return ({
      ngModule: ComponentModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: RegistryOptions,
          useFactory: provideRegistryOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    });
  }
}
