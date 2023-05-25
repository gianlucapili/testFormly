import { Component, Input } from '@angular/core';
import { CompData } from '../component';

@Component({
  template: `
    <div class="job-ad my-2" style="border: 1px solid black;" >
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements CompData {
  @Input() data: any;
}
