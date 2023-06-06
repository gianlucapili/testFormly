import { Injectable, Type } from '@angular/core';

export interface DynamicRouteDefinition {
    path: string[] | string;
    component: string;
    title?: string;
    subTitle?: string;
    components?: any[];
}

export interface NotFoundStrategy {
    stragegy: 'redirect' | 'component';
    redirect?: string;
    component?: Type<any>;
}


export interface DynamicRoute {
    routes?: DynamicRouteDefinition[];
    notFound?: NotFoundStrategy;
}

@Injectable({
    providedIn: "root"
})
export class DynamicRoutesOptions implements DynamicRoute {
    routes?: DynamicRouteDefinition[];
    notFound?: NotFoundStrategy;
}