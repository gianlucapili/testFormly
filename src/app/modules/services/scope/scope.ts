import { Route } from "@angular/router"
import { ApiContainer } from "../apis/apis.interfaces"

export type ScopeComponent = {
    readonly $ref: string,
    readonly data: any
    readonly components: ScopeComponent[]
}

export interface Scope {
    readonly config: ScopeConfig
    readonly env: { [k: string]: any }
    current: {
        readonly routeData: any,
        readonly routeParams: any,
        readonly components: ScopeComponent[],
        readonly $id: string,
        readonly $apis: ApiContainer
    }
}

export interface ScopeConfig {
    [k: string]: any
} 