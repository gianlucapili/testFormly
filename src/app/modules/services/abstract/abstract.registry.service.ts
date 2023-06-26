import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractRegistryService<T extends Function> {

  protected registry: Map<string, T> = new Map();

  public get(name: string) {
    const type = this.registry.get(name);
    if (!type) throw new Error(`Component ${name} not found in registry`);
    return type;
  }

  protected add(type: T) {
    const name = this.dasherizeName(type);
    if (!name) return;
    this.registry.set(name, type);
  }

  protected dasherizeName(type: Function) {
    const name: string = type?.prototype?.constructor?.name;
    if (!name) return;
    return name.replace(/[A-Z]/g, (char, index) => (index !== 0 ? '-' : '') + char.toLowerCase());
  };
}
