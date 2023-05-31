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
import { AppRoutingModule } from './app-routing.module';
import { DynamicRouterModule } from './router-module/dynamic-router.module';
import { HomeComponent } from './pages/base-pages/home/home.component';
import { NotFoundComponent } from './pages/base-pages/not-found/not-found.component';
import { FormlyComponent } from './pages/extra-pages/formly/formly.component';
import { PageExtraComponent } from './pages/extra-pages/page-extra/page-extra.component';

import routes from './routes.json';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FormlyComponent,
    PageExtraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormModule,
    AppRoutingModule,
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
    DynamicRouterModule.forRoot({
      pages: [
        FormlyComponent,
        PageExtraComponent
      ],
      routes,
      notFound: {
        stragegy: 'component',
        component: NotFoundComponent
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
