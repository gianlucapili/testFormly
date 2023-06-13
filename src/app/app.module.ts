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
import routes from './routes.json';
import { ComponentModule, DynamicRouterModule, FormModule, RLB_Components } from './modules';
import { RlbFormComponent } from './components/form.component';
import { ComponentTranslateService } from './modules/component/services/translate/translate.service';
import { TranslateService } from './services/translate/translate.service';

@NgModule({
  declarations: [
    RlbFormComponent,

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
        ...RLB_Components,
        RlbFormComponent
      ],
      providers: [{
        provide: ComponentTranslateService,
        useClass: TranslateService
      }],
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
  bootstrap: [AppComponent]
})
export class AppModule { }
