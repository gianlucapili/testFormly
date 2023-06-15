import { Injectable } from '@angular/core';
import { ComponentTranslateService } from 'src/app/modules/services/translate/translate.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService extends ComponentTranslateService {
  
  override translate(k: string): string {
    return `it::${k}`
  }
}
