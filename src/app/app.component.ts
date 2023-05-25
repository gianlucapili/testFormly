import { Component } from '@angular/core';
import { HeroProfileComponent } from './component-module/components/hero-profile.component';
import { HeroJobAdComponent } from './component-module/components/hero-job-ad.component';
import { ComItem } from './component-module/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-formly';

  components = [new ComItem(
    HeroProfileComponent,
    { name: 'Bombasto', bio: 'Brave as they come' }
  ),
  new ComItem(
    HeroProfileComponent,
    { name: 'Dr. IQ', bio: 'Smart as they come' }
  ),
  new ComItem(
    HeroJobAdComponent,
    { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
  ),
  new ComItem(
    HeroJobAdComponent,
    { headline: 'Openings in all departments', body: 'Apply today' }
  )
  ]
}
