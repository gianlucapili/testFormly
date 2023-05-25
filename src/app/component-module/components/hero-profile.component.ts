import { Component, Input } from '@angular/core';
import { CompData } from '../component';

@Component({
  template: `
    <div class="hero-profile my-2" style="border: 1px solid black;" >
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements CompData {
  @Input() data: any;
}