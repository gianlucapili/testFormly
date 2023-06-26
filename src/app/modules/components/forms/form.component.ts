import { lastValueFrom, isObservable, catchError, OperatorFunction, Observable, of, switchMap } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ComponentData } from '../../component';
import { AbstractErrorService, BusinessFunctionsService, ScopeManagerService } from '../../services';
import { FormData, FormDataValueErrors, FormDataValues, FormDataValuesSuccess } from './form-data';

@Component({
  selector: 'rlb-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [fields]="fields" [form]="form"></formly-form>
      <button type="submit" [class]="colorClass">{{ data.button | scoped | async }}</button>
    </form>`
})
export class RlbFormComponent implements ComponentData<FormData> {
  @Input() data!: FormData;

  @Output() OnSubmit: EventEmitter<FormDataValues> = new EventEmitter<FormDataValues>();
  @Output() OnSuccess: EventEmitter<FormDataValuesSuccess> = new EventEmitter<FormDataValuesSuccess>();
  @Output() OnError: EventEmitter<FormDataValueErrors> = new EventEmitter<FormDataValueErrors>();
  @Output() OnValid: EventEmitter<FormDataValues> = new EventEmitter<FormDataValues>();

  $ref?: string | undefined;
  form: FormGroup;

  constructor(
    private scopeManager: ScopeManagerService,
    private businessFunctions: BusinessFunctionsService,
    private http: HttpClient,
    private router: Router,
    private errorService: AbstractErrorService
  ) {
    this.form = new FormGroup({});
  }

  public get colorClass() {
    if (this.data.color) return `btn btn-${this.data.color}`
    return `btn`
  }

  public get fields(): FormlyFieldConfig[] {
    return this.data.fields
  }

  async onSubmit() {

    if (this.data.onSubmit) {
      const fn = this.businessFunctions.get(this.data.onSubmit.function);
      if (typeof fn === 'function') {
        fn(this.form.value);
      }
    }
    this.OnSubmit.emit({ formValues: this.form.value });

    if (this.form && this.form.invalid) {
      this.form.markAllAsTouched();
      this.OnError.emit({ formValues: this.form.value, validationErrors: this.form.errors });
      return;
    }

    if (this.data.onValid) {
      const fn = this.businessFunctions.get(this.data.onValid.function);
      if (typeof fn === 'function') {
        fn(this.form.value);
      }
    }
    else {
      await this.formError(this.form.value, this.form.errors, null)
    }
    this.OnValid.emit({ formValues: this.form.value });

    if (this.data && this.data.action) {
      const url = await this.scopeManager.resolveString(this.data.action.url);
      let response: object | string | number | boolean | undefined = undefined;
      let params = await this.scopeManager.resolveStringObject(this.data.action.params);
      switch (this.data.action.method) {
        case 'POST':
          response = await lastValueFrom(this.http.post(url, this.form.value, { params })
            .pipe(this.catchError(this.form.value, this.form.errors)))
          await this.formSuccess(response, this.form.value);
          break;
        case 'PUT':
          response = await lastValueFrom(this.http.put(url, this.form.value, { params: this.data.action?.params })
            .pipe(this.catchError(this.form.value, this.form.errors)))
          await this.formSuccess(response, this.form.value);
          break;
        case 'PATCH':
          response = await lastValueFrom(this.http.patch(url, this.form.value, { params: this.data.action?.params })
            .pipe(this.catchError(this.form.value, this.form.errors)))
          await this.formSuccess(response, this.form.value);
          break;
        case 'DELETE':
          response = await lastValueFrom(this.http.delete(url, { params: this.data.action?.params })
            .pipe(this.catchError(this.form.value, this.form.errors)))
          await this.formSuccess(response, this.form.value);
          break;
      }
    }
  }

  private async formSuccess(form: any, data: any) {
    let ret;
    if (this.data.onSuccess) {
      const fn = this.businessFunctions.get(this.data.onSuccess.function);

      if (typeof fn === 'function') {
        let _ret = fn(form, data);
        if (isObservable(_ret)) {
          ret = await lastValueFrom(_ret);
        } else if (typeof _ret === 'object' && typeof _ret.then === 'function') {
          ret = await _ret;
        } else {
          ret = _ret;
        }
      } else {
        ret = data;
      }

      if (this.data.onSuccess.navigate) {
        const navUrl = await this.scopeManager.resolveString(this.data.onSuccess.navigate, { $form: form, $data: data, $cmp: ret });
        await this.router.navigate([navUrl])
      }
    }

    this.OnSuccess.emit({
      formValues: form,
      apiValues: data,
      parsedValues: ret
    } as FormDataValuesSuccess);
    return ret;
  }

  private async formError(form: any, vError: ValidationErrors | null, error: any): Promise<any> {
    let ret;
    if (this.data.onError) {
      const fn = this.businessFunctions.get(this.data.onError.function);

      if (typeof fn === 'function') {
        let _ret = fn(form, vError, error);
        if (isObservable(_ret)) {
          ret = await lastValueFrom(_ret);
        } else if (typeof _ret === 'object' && typeof _ret.then === 'function') {
          ret = await _ret;
        } else {
          ret = _ret;
        }
      } else {
        ret = form;
      }

      if (this.data.onError.navigate) {
        const navUrl = await this.scopeManager.resolveString(this.data.onError.navigate, { $form: form, $err: error, $cmp: ret });
        await this.router.navigate([navUrl])
      }
    }

    this.errorService.handleFormError(error, ret, vError, form)

    this.OnSuccess.emit({
      formValues: form,
      validationErrors: vError,
      apiError: error
    } as FormDataValueErrors);
    return ret;
  }

  public catchError<T>(form: any, vError: ValidationErrors | null, logConsole?: boolean): OperatorFunction<T, T | any> {
    return (source: Observable<T>) => {
      return source.pipe(
        catchError((error: Error, k) => {
          if (logConsole === true) {
            console.warn(error)
          }
          return of(error).pipe(switchMap(error => {
            return this.formError(form, vError, error)
          }));
        })
      );
    };
  }
}
