import { DynamicRoutesDefinition } from "./dynamic-route-definition";
import { NotFoundStrategy } from "./not-found-strategy";

export interface DynamicRoute {
    routes?: DynamicRoutesDefinition;
    notFound?: NotFoundStrategy;
}