import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractTranslateService {

  abstract translate(k: string): string;
}
