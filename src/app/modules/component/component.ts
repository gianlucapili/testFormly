export interface ComponentItem<T = any> extends ComponentData<T> {
  name: string;
  components?: ComponentItem[];
}

export interface ComponentData<T = any> {
  data: T;
}