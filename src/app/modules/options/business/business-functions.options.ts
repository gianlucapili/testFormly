import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class BusinessFunctionsOptions {
    public businessFunctions?: { [k: string]: Function }
}