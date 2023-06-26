import { Injectable, Type } from '@angular/core';
import { PagesRegistryOptions } from '../../options';
import { AbstractRegistryService } from '../abstract/abstract.registry.service';

@Injectable({
  providedIn: 'root'
})
export class PagesRegistryService extends AbstractRegistryService<Type<any>> {

  constructor(options: PagesRegistryOptions) {
    super();
    if (options.pages) {
      for (const type of options.pages) {
        this.add(type);
      }
    }
  }
}
