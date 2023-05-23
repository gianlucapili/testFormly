import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-file',
  templateUrl: './formly-field-file.component.html',
  styleUrls: ['./formly-field-file.component.scss']
})
export class FormlyFieldFileComponent extends FieldType {
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formControl.setValue(file);
    }
  }
}