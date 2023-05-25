import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModule } from './formly/form.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentDirective } from './component-module/component-module.directive';
import { HeroProfileComponent } from './component-module/components/hero-profile.component';
import { HeroJobAdComponent } from './component-module/components/hero-job-ad.component';
import { ComponentsContainerComponent } from './component-module/component-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsContainerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    ComponentDirective
  ],
  imports: [
    BrowserModule,
    FormModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
