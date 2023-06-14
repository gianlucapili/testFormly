import { OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../../component/services/apis/apis.service';
import { ScopeManagerService } from '../../component/services/scope/scope-manager.service';

export interface PageRouteParams {
    [key: string]: any;
}

export interface PageDefinition {
    title: string;
    subTitle: string;
}

@Injectable()
export abstract class AbstractPage implements OnInit, PageDefinition {
    public title: string;
    public subTitle: string;
    public components: any[];
    public params: PageRouteParams;

    constructor(
        protected route: ActivatedRoute,
        protected apisService: ApisService,
        protected scopeAccessor: ScopeManagerService) {
        this.title = route.snapshot.data["title"];
        this.subTitle = route.snapshot.data["subTitle"];
        this.components = route.snapshot.data["components"];
        this.params = route.snapshot.params
    }

    ngOnInit() {
        this.apisService.loadApis(this.route.snapshot.data["apis"]).then(apis => {
            this.scopeAccessor.setGlobalApis(apis);
        })
    }
}