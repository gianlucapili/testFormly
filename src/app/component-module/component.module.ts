import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsContainerComponent } from "./component-container.component";
import { NgbCollapseModule, NgbAlertModule, NgbPaginationModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroJobAdComponent } from "./components/hero-job-ad.component";
import { HeroProfileComponent } from "./components/hero-profile.component";
import { ComponentDirective } from "./component-module.directive";
import { RegistryOptions } from "./services/registry/registry.options";
import { ComponentOptions, FOR_ROOT_OPTIONS_TOKEN } from "./options/module.options";
import { provideRegistryOptions } from "./options/registry.options.provider";
import { RlbButtonComponent } from "./components/rlb-button.component";
import { RlbAccordionComponent } from "./components/rlb-accordion.component";
import { RlbAlertComponent } from "./components/rlb-alert.component";
import { RlbPaginationComponent } from "./components/rlb-pagination.component";
import { RlbCollapseComponent } from "./components/rlb-collapse.component";
import { RlbTooltipComponent } from "./components/rlb-tooltip.component";
import { RlbProgressBarComponent } from "./components/rlb-progress-bar.component";
import { RlbBadgeComponent } from "./components/rlb-badge.component";
import { RlbCardComponent } from "./components/rlb-card.component";


@NgModule({
  declarations: [
    ComponentsContainerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    ComponentDirective,
    RlbAccordionComponent,
    RlbAlertComponent,
    RlbPaginationComponent,
    RlbCollapseComponent,
    RlbTooltipComponent,
    RlbProgressBarComponent,
    RlbBadgeComponent,
    RlbButtonComponent,
    RlbCardComponent 
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgbProgressbarModule
  ],
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
