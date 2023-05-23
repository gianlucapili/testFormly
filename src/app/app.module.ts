import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { TestComponent } from './test/test.component';
import { FormlyFieldFileComponent } from './formly-field-file/formly-field-file.component';

import { FieldMatchValidator } from './services/custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormlyFieldFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFileComponent },
      ],
      validators: [
        { name: 'fieldMatch', validation: FieldMatchValidator },
      ],
      validationMessages: [
        { name: 'fieldMatch', message: 'Non combacia' },
      ],
    }),  
    FormlyBootstrapModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
