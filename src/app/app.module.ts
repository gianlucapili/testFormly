import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/base-pages/home/home.component';
import { NotFoundComponent } from './pages/base-pages/not-found/not-found.component';
import { FormlyComponent } from './pages/extra-pages/formly/formly.component';
import { PageExtraComponent } from './pages/extra-pages/page-extra/page-extra.component';
import { AbstractTranslateService } from './modules/services/abstract/abstract.translate.service';
import { TranslateService } from './services/translate/translate.service';
import { ComponentModule } from './modules/component.module';
import { RLB_Components } from './modules/components';
import { routes } from './routes';


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
    AppRoutingModule,
    ComponentModule.forRoot({
      components: [
        ...RLB_Components
      ],
      providers: [{
        provide: AbstractTranslateService,
        useClass: TranslateService
      }],
      pages: [
        FormlyComponent,
        PageExtraComponent
      ],
      routes: routes,
      notFound: {
        stragegy: 'component',
        component: NotFoundComponent
      },
      businessFunctions: {
        k: (service: AbstractTranslateService) => true
      }
    }),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
