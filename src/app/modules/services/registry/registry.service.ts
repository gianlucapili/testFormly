import { Injectable, Type } from '@angular/core';
import { RegistryOptions } from '../../options';
import { AbstractRegistryService } from '../abstract/abstract.registry.service';

@Injectable({
  providedIn: 'root'
})
export class RegistryService extends AbstractRegistryService<Type<any>> {

  constructor(options: RegistryOptions) {
    super();
    if (options.components) {
      for (const type of options.components) {
        this.add(type);
      }
    }
  }
}
