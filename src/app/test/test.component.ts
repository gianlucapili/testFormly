import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  form = new FormGroup({ });  
  
  fields: FormlyFieldConfig[] = [];

  constructor(private formlyJsonschema: FormlyJsonschema, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<FormlyFieldConfig[]>('assets/form-definition.json').subscribe(data => {
      this.fields = data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}