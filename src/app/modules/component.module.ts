import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { ROUTES } from "@angular/router";
import { ScopedPipe } from "./pipes";
import { DynamicRoutesOptions, FOR_ROOT_OPTIONS_TOKEN, ModuleOptions, PagesRegistryOptions, RegistryOptions } from "./options";
import { provideDynamicRoutes, provideDynamicRoutesOptions, providePageRegistryOptions, provideRegistryOptions } from "./providers";
import { DynamicRoutingService } from "./services";
import { ComponentsContainerComponent, RLB_Components } from "./components";
import { ComponentDirective } from "./components/core/component-module.directive";
import { FieldMatchValidator, FormComponent, FormlyFieldFileComponent } from "./components/forms";

@NgModule({
  declarations: [
    ComponentsContainerComponent,
    ComponentDirective,
    ...RLB_Components,
    ScopedPipe
  ],
  imports: [
    CommonModule,
    FormComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFileComponent },
      ],
      validators: [
        { name: 'fieldMatch', validation: FieldMatchValidator },
      ],
    }),
    FormlyBootstrapModule
  ],
  exports: [
    ComponentsContainerComponent,
    FormComponent
  ],
})
export class ComponentModule {
  static forRoot(options?: ModuleOptions): ModuleWithProviders<ComponentModule> {
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
        },
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: PagesRegistryOptions,
          useFactory: providePageRegistryOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        },
        {
          provide: DynamicRoutesOptions,
          useFactory: provideDynamicRoutesOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        },
        {
          provide: ROUTES,
          useFactory: provideDynamicRoutes,
          multi: true,
          deps: [DynamicRoutingService]
        },
        ...(options?.providers || [])
      ]
    });
  }
}
