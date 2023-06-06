import { Injectable, Type } from '@angular/core';

export interface PagesRegistry {
    pages?: Type<any>[];
}

@Injectable({
    providedIn: "root"
})
export class PagesRegistryOptions implements PagesRegistry {
    public pages?: Type<any>[]
}