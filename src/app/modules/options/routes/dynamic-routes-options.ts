import { Injectable } from '@angular/core';
import { DynamicRouteDefinition } from './dynamic-route-definition';
import { NotFoundStrategy } from './not-found-strategy';
import { DynamicRoute } from './dynamic-route';

@Injectable({
    providedIn: "root"
})
export class DynamicRoutesOptions implements DynamicRoute {
    routes?: DynamicRouteDefinition[];
    notFound?: NotFoundStrategy;
}