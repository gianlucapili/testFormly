import { DynamicRouteDefinition } from "./dynamic-route-definition";
import { NotFoundStrategy } from "./not-found-strategy";

export interface DynamicRoute {
    routes?: DynamicRouteDefinition[];
    notFound?: NotFoundStrategy;
}