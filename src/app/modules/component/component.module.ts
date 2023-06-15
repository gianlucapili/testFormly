import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistryOptions } from "./services/registry/registry.options";
import { provideRegistryOptions } from "./providers/registry.options.provider";
import { RLB_Components } from "./components";
import { ScopedPipe } from './pipes/scoped.pipe';
import { ComponentsContainerComponent } from "./components/core/component-container.component";
import { ComponentDirective } from "./components/core/component-module.directive";
import { FOR_ROOT_OPTIONS_TOKEN, ModuleOptions } from "./options/dynamic-routes-options";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyFieldFileComponent } from "./components/forms/fields/formly-field-file.component";
import { FieldMatchValidator } from "./components/forms/validators/custom-validators";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormComponent } from "./components/forms";
import { PagesRegistryOptions } from "./options/routes/page-registry.options";
import { providePageRegistryOptions } from "./providers/page-registry-options.provider copy";
import { DynamicRoutesOptions } from "./options/routes/dynamic-routes-options";
import { provideDynamicRoutesOptions } from "./providers/dynamic-routes-options.provider";
import { provideDynamicRoutes } from "./providers/routes.provider";
import { DynamicRoutingService } from "./services/routes/dynamic-routing.service";
import { ROUTES } from "@angular/router";

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
