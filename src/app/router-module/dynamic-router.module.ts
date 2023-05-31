import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { ComponentOptions, DynamicRoutesOptions, FOR_ROOT_OPTIONS_TOKEN, PagesRegistryOptions, provideDynamicRoutesOptions, providePageRegistryOptions } from './configuration';
import { DynamicRoutingService, provideDynamicRoutes } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class DynamicRouterModule {
  static forRoot(options?: ComponentOptions): ModuleWithProviders<DynamicRouterModule> {
    return ({
      ngModule: DynamicRouterModule,
      providers: [
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
        }
      ]
    });
  }
}
