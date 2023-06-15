import { Type } from "@angular/core";

export interface NotFoundStrategy {
    stragegy: 'redirect' | 'component';
    redirect?: string;
    component?: Type<any>;
}