import { Injectable } from '@angular/core';
import { AbstractRegistryService } from '../abstract/abstract.registry.service';
import { BusinessFunctionsOptions } from '../../options/business/business-functions.options';

@Injectable({
  providedIn: 'root'
})
export class BusinessFunctionsService extends AbstractRegistryService<Function> {

  constructor(options: BusinessFunctionsOptions) {
    super();
    if (options.businessFunctions) {
      for (const key of Object.keys(options.businessFunctions)) {
        this.add(options.businessFunctions[key], key);
      }
    }
  }
}
