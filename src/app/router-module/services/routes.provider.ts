import { Route } from '@angular/router';
import { DynamicRoutingService } from './dynamic-routing.service';

export function provideDynamicRoutes(dynamicRoutingService: DynamicRoutingService): Route[] {
    return dynamicRoutingService.routes;
}