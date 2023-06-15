import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ComponentTranslateService {

  abstract translate(k: string): string;
}
