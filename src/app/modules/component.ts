import { ApiDescriptor } from "./services/apis/apis.interfaces";

export interface ComponentItem<T = any> extends ComponentData<T> {
  name: string;
  apis?: ApiDescriptor;
  components?: ComponentItem[];
}

export interface ComponentData<T = any> {
  data: T;
  $ref?: string;
}