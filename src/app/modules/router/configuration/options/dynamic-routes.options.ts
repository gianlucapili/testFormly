import { Injectable, Type } from '@angular/core';
import { ApiDescriptor } from 'src/app/modules/component/services/apis/apis.interfaces';

export interface DynamicRouteDefinition {
    path: string[] | string;
    component: string;
    title?: string;
    subTitle?: string;
    components?: any[];
    apis?: ApiDescriptor
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