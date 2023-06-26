import { Injectable } from '@angular/core';
import { AbstractTranslateService } from 'src/app/modules/services';

@Injectable({
  providedIn: 'root'
})
export class TranslateService extends AbstractTranslateService {
  
  override translate(k: string): string {
    return `it::${k}`
  }
}
