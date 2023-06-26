import { ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

type __ActNames = Partial<Record<'onSuccess' | 'onError' | 'onSubmit' | 'onValid', FormAction>>

interface FormAction {
  navigate: string,
  function?: string,
}

export interface FormData extends __ActNames {
  fields: FormlyFieldConfig[],
  action: FormDataAction,
  color: string,
  button: string,
}

export interface FormDataAction {
  method: string,
  url: string,
  params?: { [key: string]: string | number | boolean | readonly (string | number | boolean)[] }
  encode: string
}

export interface FormDataValues {
  formValues: { [key: string]: string | number | boolean | readonly (string | number | boolean)[] }
}

export interface FormDataValuesSuccess extends FormDataValues {
  apiValues?: any,
  parsedValues?: any,
}

export interface FormDataValueErrors extends FormDataValues {
  validationErrors?: ValidationErrors | null;
  apiErrors?: any;
}