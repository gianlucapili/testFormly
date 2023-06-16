import { FormlyFieldConfig } from "@ngx-formly/core";

export interface FormData {
  fields: FormlyFieldConfig[],
  color: string,
  button: string
}