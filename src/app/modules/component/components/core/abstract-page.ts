import { OnInit, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../../services/apis/apis.service';
import { ScopeManagerService } from '../../services/scope/scope-manager.service';

export interface PageRouteParams {
  [key: string]: any;
}

export interface PageDefinition {
  title: string;
  subTitle: string;
}

@Injectable()
export abstract class AbstractPage implements OnInit, OnDestroy, PageDefinition {
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
  ngOnDestroy(): void {
    this.scopeAccessor.destroyScope();
  }

  ngOnInit() {
    const scopeId = this.route.snapshot.url.toString().hashCode();
    this.scopeAccessor.buildScope(
      scopeId,
      this.route.snapshot.data,
      Object.assign({},
        this.route.snapshot.params,
        this.route.snapshot.queryParams));
    this.apisService.loadApis(this.route.snapshot.data["apis"]).then(apis => {
      this.scopeAccessor.setGlobalApis(apis);
    })
  }
}