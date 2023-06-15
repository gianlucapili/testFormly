import { Injectable, Type } from '@angular/core';
import { PagesRegistryOptions } from '../../options/routes/page-registry.options';


@Injectable({
  providedIn: 'root'
})
export class PagesRegistryService {

  private registry: Map<string, Type<any>> = new Map();

  constructor(options: PagesRegistryOptions) {
    if (options.pages) {
      for (const type of options.pages) {
        this.add(type);
      }
    }
  }

  get(name: string) {
    const type = this.registry.get(name);
    if (!type) throw new Error(`Page ${name} not found in registry`);
    return type;
  }

  private add(type: Type<any>) {
    const name = this.dasherizeName(type);
    if (!name) return;
    this.registry.set(name, type);
  }

  private dasherizeName(type: Function) {
    const name: string = type?.prototype?.constructor?.name;
    if (!name) return;
    return name.replace(/[A-Z]/g, (char, index) => (index !== 0 ? '-' : '') + char.toLowerCase());
  };
}
