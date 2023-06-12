import { Injectable } from '@angular/core';
import { Scope } from './scope';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScopeManagerService {

  private scope: Scope

  constructor() {
    this.scope = {
      config: {
        cfg: "pippo"
      },
      global: {
        glo: "pluto"
      }
    }
    console.log(this.scope)
  }

  public addConfig(prop: string | { [k: string]: any }, data: any) {
    if (typeof prop === 'string') {
      Object.assign(this.scope.config, { [prop]: data })
    }
    else {
      Object.assign(this.scope.config, prop)
    }
  }

  public addGlobal(prop: string | { [k: string]: any }, data: any) {
    if (typeof prop === 'string') {
      Object.assign(this.scope.global, { [prop]: data })
    }
    else {
      Object.assign(this.scope.global, prop)
    }
  }

  public rmConfig(prop: string) {
    delete this.scope.config[prop]
  }

  public rmGlobal(prop: string) {
    delete this.scope.global[prop]
  }

  public buildScope(id: string, routeData: any, routeParams: any) {
    if (typeof this.scope.current?.$id !== id) {
      this.destroyScope()
    }
    this.scope.current = {
      components: [],
      routeData,
      routeParams,
      $id: id
    }
  }

  public pushComponent(ref: string, data: any) {
    if (typeof this.scope.current === 'undefined') return;
    if (typeof ref === 'undefined') return;
    this.scope.current.components.push({
      $ref: ref,
      data,
      components: []
    })
  }

  public destroyScope() {
    delete this.scope.current
  }
}
