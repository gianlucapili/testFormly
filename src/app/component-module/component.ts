export interface ComponentItem<T = any> extends ComponentData<T> {
  name: string;
}

export interface ComponentData<T = any> {
  data: T;
}