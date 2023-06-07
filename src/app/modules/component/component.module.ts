import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsContainerComponent } from "./component-container.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentDirective } from "./component-module.directive";
import { RegistryOptions } from "./services/registry/registry.options";
import { ComponentOptions, FOR_ROOT_OPTIONS_TOKEN } from "./options/module.options";
import { provideRegistryOptions } from "./options/registry.options.provider";
import { RLB_Components } from "./components";

@NgModule({
  declarations: [
    ComponentsContainerComponent,
    ComponentDirective,
    ...RLB_Components
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ComponentsContainerComponent
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
