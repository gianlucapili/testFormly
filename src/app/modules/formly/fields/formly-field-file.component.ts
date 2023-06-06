import { Component } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-file',
  standalone: true,
  imports: [FormlyModule],  
  template: `<input class="form-control mb-3" type="file" id="formFile" (change)="onFileChange($event)" [formlyAttributes]="field">`,
})
export class FormlyFieldFileComponent extends FieldType {
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formControl.setValue(file);
    }
  }
}