import { Injectable } from '@angular/core';
import { Scope } from './scope';
import { default as jsonata } from 'jsonata'
import { ApiContainer } from '../apis/apis.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScopeManagerService {

  private scope: Scope
  private readonly regex = /\{([^\}]+)\}/gm;
  private readonly emptyScope = { components: [], routeData: {}, routeParams: {}, $id: '', $apis: {} }

  constructor() {
    this.scope = {
      config: {
        cfg: "pippo"
      },
      global: {
        glo: "pluto"
      },
      current: this.emptyScope
    }
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
    if (this.scope.current.$id && this.scope.current?.$id !== id) {
      this.destroyScope()
      this.scope.current = {
        components: [],
        routeData,
        routeParams,
        $id: id,
        $apis: {}
      }
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
    this.scope.current = this.emptyScope
  }

  public query<T = any>(query: string): Promise<T> {
    return jsonata(query).evaluate(this.scope);
  }

  public async resolveString(template: string) {
    const matches = template.match(this.regex);
    if (matches) {
      for (const math of matches) {
        const key = math.replace('{', '').replace('}', '');
        template = template.replace(math, await jsonata(key).evaluate(this.scope));
      }
    }
    return template;
  }

  public setGlobalApis(apis: ApiContainer) {
    if (typeof this.scope.current !== 'undefined') {
      Object.assign(this.scope.current.$apis, apis);
    }
  }

  public printScope() {
    console.log(this.scope)
  }
}
