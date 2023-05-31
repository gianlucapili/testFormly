import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModule } from './formly/form.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './component-module/component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DynamicRouterModule } from './router-module/dynamic-router.module';
import { HomeComponent } from './pages/base-pages/home/home.component';
import { NotFoundComponent } from './pages/base-pages/not-found/not-found.component';
import { FormlyComponent } from './pages/extra-pages/formly/formly.component';
import { PageExtraComponent } from './pages/extra-pages/page-extra/page-extra.component';
import { RLB_Components } from './component-module/components';

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
        ...RLB_Components
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
