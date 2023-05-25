import { Component, Input } from '@angular/core';
import { ComponentData } from '../component';

@Component({
  template: `<button>{{data.name}}</button>`
})
export class HeroButtonComponent implements ComponentData {
  @Input() data: any;
}