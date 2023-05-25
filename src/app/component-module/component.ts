import { Type } from '@angular/core';

export class __InternalComponent__ {
  constructor(public component: Type<any>, public data: any) { }
}

export interface ComponentItem extends ComponentData {
  name: string;
}

export interface ComponentData {
  data: any;
}