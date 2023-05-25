import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class RegistryOptions {
    public components?: Type<any>[]
}