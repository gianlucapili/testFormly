import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScopeManagerService } from '../scope/scope-manager.service';
import { ApiContainer, ApiDescriptor, ApiEvent } from './apis.interfaces';
import { BehaviorSubject, Observable, OperatorFunction, catchError, lastValueFrom, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private httpClient: HttpClient,
    private scopeManagerService: ScopeManagerService) {
  }

  private _events: BehaviorSubject<ApiEvent | null> = new BehaviorSubject<ApiEvent | null>(null);
  public get events() {
    return this._events.asObservable();
  }

  async loadApis(apis: ApiDescriptor): Promise<ApiContainer> {
    let value: ApiContainer = {}
    if (apis) {
      for (const apiName of Object.keys(apis)) {
        const api = apis[apiName];
        const method = await this.scopeManagerService.resolveString(api.method);
        switch (api.verb) {
          case 'get': value[apiName] = await lastValueFrom(this.httpClient.get(method, api.params)
            .pipe(
              this._manageError(apiName),
              map(o => o === "__error__" ? null : o),
              tap(o => {
                if (o !== null) this._events.next({ name: apiName, success: true, data: o })
              }))); break;
          case 'post': value[apiName] = await lastValueFrom(this.httpClient.post(method, api.params)
            .pipe(
              this._manageError(apiName),
              map(o => o === "__error__" ? null : o),
              tap(o => {
                if (o !== null) this._events.next({ name: apiName, success: true, data: o })
              }))); break;
          case 'put': value[apiName] = await lastValueFrom(this.httpClient.put(method, api.params)
            .pipe(
              this._manageError(apiName),
              map(o => o === "__error__" ? null : o),
              tap(o => {
                if (o !== null) this._events.next({ name: apiName, success: true, data: o })
              }))); break;
          case 'delete': value[apiName] = await lastValueFrom(this.httpClient.delete(method, api.params)
            .pipe(
              this._manageError(apiName),
              map(o => o === "__error__" ? null : o),
              tap(o => {
                if (o !== null) this._events.next({ name: apiName, success: true, data: o })
              }))); break;
        }
      }
      this._events.next({ name: null, success: true, data: value });
    }
    return value;
  }

  private _manageError<T>(apiName: string): OperatorFunction<T, T | string> {
    return (source: Observable<T>) => {
      return source.pipe(
        catchError((error, k) => {
          this._events.next({ name: apiName, success: false, data: error });
          console.warn(error);
          return of("__error__");
        }),
      );
    };
  }

}
