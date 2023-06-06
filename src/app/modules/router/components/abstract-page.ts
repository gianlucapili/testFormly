import { Component } from '@angular/core';
import { Type, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';


export interface PageRouteParams {
    [key: string]: any;
}

export interface PageDefinition {
    title: string;
    subTitle: string;
}

@Injectable()
export abstract class AbstractPage implements PageDefinition {
    public title: string;
    public subTitle: string;
    public components: any[];
    public params: PageRouteParams;

    constructor(route: ActivatedRoute) {
        this.title = route.snapshot.data["title"];
        this.subTitle = route.snapshot.data["subTitle"];
        this.components = route.snapshot.data["components"];
        this.params = route.snapshot.params
    }
}