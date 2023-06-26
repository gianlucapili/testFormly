import { AllComponents } from "../../component";
import { ApiDescriptor } from "../../services/apis/apis.interfaces";

export type DynamicRoutesDefinition = DynamicRouteDefinition[];

export interface DynamicRouteDefinition {
    path: string[] | string;
    component: string;
    title?: string;
    subTitle?: string;
    components?: AllComponents[];
    apis?: ApiDescriptor
}