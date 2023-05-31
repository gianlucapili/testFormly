import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModule } from './formly/form.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './component-module/component.module';
import { HeroJobAdComponent } from './component-module/components/hero-job-ad.component';
import { HeroProfileComponent } from './component-module/components/hero-profile.component';
import { HeroButtonComponent } from './component-module/components/hero-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RlbAccordionComponent } from './component-module/components/rlb-accordion.component';
import { RlbAlertComponent } from './component-module/components/rlb-alert.component';
import { RlbPaginationComponent } from './component-module/components/rlb-pagination.component';
import { RlbCollapseComponent } from './component-module/components/rlb-collapse.component';
import { RlbTooltipComponent } from './component-module/components/rlb-tooltip.component';
import { RlbProgressBarComponent } from './component-module/components/rlb-progress-bar.component';
import { RlbBadgeComponent } from './component-module/components/rlb-badge.component';
import { RlbButtonComponent } from './component-module/components/rlb-button.component';
import { RlbCardComponent } from './component-module/components/rlb-card.component';
import { RlbCloseButtonComponent } from './component-module/components/rlb-close-button.component';
import { RlbSpinnerComponent } from './component-module/components/rlb-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormModule,
    ComponentModule.forRoot({
      components: [
        HeroJobAdComponent,
        HeroProfileComponent,
        HeroButtonComponent,
        RlbAccordionComponent,
        RlbAlertComponent,
        RlbPaginationComponent,
        RlbCollapseComponent,
        RlbTooltipComponent,
        RlbProgressBarComponent,
        RlbBadgeComponent,
        RlbButtonComponent,
        RlbCardComponent,
        RlbCloseButtonComponent,
        RlbSpinnerComponent
      ]
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
