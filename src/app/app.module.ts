import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModule } from './formly/form.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './component-module/component.module';
import { HeroJobAdComponent } from './component-module/components/hero-job-ad.component';
import { HeroProfileComponent } from './component-module/components/hero-profile.component';
import { HeroButtonComponent } from './component-module/components/hero-button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormModule,
    ComponentModule.forRoot({
      componets: [
        HeroJobAdComponent,
        HeroProfileComponent,
        HeroButtonComponent
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
