import { ApiDescriptor } from "../../services/apis/apis.interfaces";

export interface DynamicRouteDefinition {
    path: string[] | string;
    component: string;
    title?: string;
    subTitle?: string;
    components?: any[];
    apis?: ApiDescriptor
}