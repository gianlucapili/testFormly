import { Route } from "@angular/router"

export type ScopeComponent = {
    readonly $ref: string,
    readonly data: any
    readonly components: ScopeComponent[]
}

export interface Scope {
    readonly config: { [k: string]: any }
    readonly global: { [k: string]: any }
    current?: {
        readonly routeData: any,
        readonly routeParams: any,
        readonly components: ScopeComponent[],
        readonly $id: string
    }
}