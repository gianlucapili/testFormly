import { Route } from '@angular/router';
import { DynamicRoutingService } from '../services/routes/dynamic-routing.service';

export function provideDynamicRoutes(dynamicRoutingService: DynamicRoutingService): Route[] {
    return dynamicRoutingService.routes;
}