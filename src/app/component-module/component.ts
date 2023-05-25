import { Type } from '@angular/core';

export class ComItem {
  constructor(public component: Type<any>, public data: any) {}
}

export interface CompData {
  data: any;
}