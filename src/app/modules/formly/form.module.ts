import { NgModule } from "@angular/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyModule } from "@ngx-formly/core";
import { FormComponent } from "./form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyFieldFileComponent } from "./fields/formly-field-file.component";
import { FieldMatchValidator } from "./validators/custom-validators";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFileComponent },
      ],
      validators: [
        { name: 'fieldMatch', validation: FieldMatchValidator },
      ],
    }),  
    FormlyBootstrapModule,
    FormComponent
  ],
  exports: [FormComponent],
})
export class FormModule { }
