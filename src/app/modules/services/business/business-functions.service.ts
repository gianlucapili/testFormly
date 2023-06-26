import { Injectable } from '@angular/core';
import { AbstractRegistryService } from '../abstract/abstract.registry.service';
import { BusinessFunctionsOptions } from '../../options/business/business-functions.options';

@Injectable({
  providedIn: 'root'
})
export class BusinessFunctionsService extends AbstractRegistryService<Function> {

  constructor(options: BusinessFunctionsOptions) {
    super();
    if (options.functions) {
      for (const type of options.functions) {
        this.add(type);
      }
    }
  }
}
