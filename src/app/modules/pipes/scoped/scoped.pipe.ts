import { Pipe, PipeTransform } from '@angular/core';
import { ComponentTranslateService, ScopeManagerService } from '../../services';


@Pipe({
  name: 'scoped'
})
export class ScopedPipe implements PipeTransform {

  constructor(
    private scopeManager: ScopeManagerService,
    private componentTranslateService: ComponentTranslateService
  ) { }

  transform(query: string | null | undefined, ...args: unknown[]): Promise<any> {
    if (query) {
      switch (query[0]) {
        case '$': return this.scopeManager.query(query.slice(1));
        case '#': return this.__prom(this.componentTranslateService.translate(query.slice(1)));
        default: return this.__prom(query);
      }
    }
    else {
      return this.__prom(query)
    }

  }

  private __prom<T = any>(out: T) {
    return new Promise<T>((r) => r(out))
  }
}
