import { Injectable, Type } from '@angular/core';
import { PagesRegistry } from './pages-registry';

@Injectable({
    providedIn: "root"
})
export class PagesRegistryOptions implements PagesRegistry {
    public pages?: Type<any>[]
}