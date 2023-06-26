import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractErrorService {

  abstract handleFormError(k: any, processed: any, validationErrors: ValidationErrors | null, fromValues: any): void;
}
