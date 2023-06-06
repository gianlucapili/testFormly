import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { DynamicRouteDefinition, DynamicRoutesOptions } from '../configuration';
import { PagesRegistryService } from './pages-registry.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutingService {

  constructor(
    private dynamicRoutesOptions: DynamicRoutesOptions,
    private pagesRegistryService: PagesRegistryService
  ) {
  }

  private createRoute(_route: DynamicRouteDefinition): Route[] {
    let path: string[];
    if (!Array.isArray(_route.path))
      path = [_route.path];
    else
      path = _route.path;
    return path.map(_path => {
      const route: Route = {
        path: _path,
        component: this.pagesRegistryService.get(_route.component),
        data: {
          title: _route.title,
          subTitle: _route.subTitle,
          components: _route.components
        }
      };
      return route;
    });
  }

  public get routes(): Route[] {
    if (this.dynamicRoutesOptions.routes && this.dynamicRoutesOptions.routes.length > 0) {
      const routes: Route[] = this.dynamicRoutesOptions.routes.map(_route => this.createRoute(_route)).flat(2);
      if (this.dynamicRoutesOptions.notFound) {
        if (this.dynamicRoutesOptions.notFound.stragegy === 'component') {
          if (!this.dynamicRoutesOptions.notFound.component)
            throw new Error('Not found component is not defined!');
          routes.push({ path: '**', component: this.dynamicRoutesOptions.notFound.component });
        }
        else if (this.dynamicRoutesOptions.notFound.stragegy === 'redirect') {
          if (!this.dynamicRoutesOptions.notFound.redirect)
            throw new Error('Not found redirect path is not defined!');
          if (!this.dynamicRoutesOptions.notFound.component)
            throw new Error('Not found component is not defined!');
          routes.push({ path: '**', redirectTo: this.dynamicRoutesOptions.notFound.redirect });
          routes.push({
            path: this.dynamicRoutesOptions.notFound.redirect,
            component: this.dynamicRoutesOptions.notFound.component
          });
        }
      }
      return routes;
    }
    return [];
  }
}
