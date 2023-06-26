import { Injectable } from '@angular/core';
import { Scope, ScopeConfig } from './scope';
import { default as jsonata } from 'jsonata'
import { ApiContainer } from '../apis/apis.interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScopeManagerService {

  private scope: Scope
  private readonly regex = /\$\{([^\}]+)\}/gm;
  private readonly emptyScope = { components: [], routeData: {}, routeParams: {}, $id: '', $apis: {} }

  constructor() {
    this.scope = {
      config: {},
      env: environment,
      current: this.emptyScope
    }
  }

  public addConfig<T = ScopeConfig>(data: T) {
    Object.assign(this.scope.config, data)
  }

  public rmConfig(prop: string) {
    delete this.scope.config[prop]
  }

  public buildScope(id: string, routeData: any, routeParams: any) {
    this.scope.current = {
      components: [],
      routeData,
      routeParams,
      $id: id,
      $apis: {}
    }
  }

  public pushComponent($ref: string, data: any) {
    if (typeof this.scope.current === 'undefined') return;
    if (typeof $ref === 'undefined') return;
    this.scope.current.components.push({ $ref, data, components: [] })
  }

  public destroyScope() {
    this.scope.current = this.emptyScope
  }

  public query<T = any>(query: string): Promise<T> {
    return jsonata(query).evaluate(this.scope);
  }

  public async resolveString(template: string, extendScope?: { [k: string]: any }): Promise<string> {
    const matches = template.match(this.regex);
    let _scope
    if (extendScope && typeof extendScope === 'object') {
      _scope = { ...this.scope, ...extendScope }
    } else {
      _scope = this.scope
    }
    if (matches) {
      for (const math of matches) {
        const key = math.replace('${', '').replace('}', '');
        template = template.replace(math, await jsonata(key).evaluate(_scope));
      }
    }
    return template;
  }

  public async resolveStringObject(template: { [param: string]: any; } | undefined, extendScope?: { [k: string]: any }): Promise<{ [param: string]: string; }> {
    const _template = { ...template }
    if (typeof _template === 'undefined' || _template === null) return _template;
    for (const key in _template) {
      if (key) {
        if (typeof _template[key] === 'string') {
          _template[key] = await this.resolveString(_template[key], extendScope)
        }
        else if (typeof _template[key] === 'boolean' || typeof _template[key] === 'number' || typeof _template[key] === 'bigint') {
          _template[key] = _template[key]
        }
        else {
          delete _template[key]
        }
      }
    }
    return _template;
  }

  public async resolvePlainObject(template: { [param: string]: any; } | undefined) {
    if (typeof template === 'undefined' || template === null) return template;
    for (const key in template) {
      if (key) {
        if (typeof template[key] === 'string') {
          template[key] = await jsonata(template[key]).evaluate(this.scope)
        }
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
