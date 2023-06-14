import { Route } from "@angular/router"
import { ApiContainer } from "../apis/apis.interfaces"

export type ScopeComponent = {
    readonly $ref: string,
    readonly data: any
    readonly components: ScopeComponent[]
}

export interface Scope {
    readonly config: { [k: string]: any }
    readonly global: { [k: string]: any }
    current: {
        readonly routeData: any,
        readonly routeParams: any,
        readonly components: ScopeComponent[],
        readonly $id: string,
        readonly $apis: ApiContainer
    }
}