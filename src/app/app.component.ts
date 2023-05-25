import { Component } from '@angular/core';
import { ComponentItem } from './component-module/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-formly';

  components: ComponentItem[] = [{
    name: "hero-profile-component",
    data: { name: 'Bombasto', bio: 'Brave as they come' }
  },
  {
    name: "hero-profile-component",
    data: { name: 'Dr. IQ', bio: 'Smart as they come' }
  },
  {
    name: "hero-job-ad-component",
    data: { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
  },
  {
    name: "hero-job-ad-component",
    data: { headline: 'Openings in all departments', body: 'Apply today', },
    components: [{
      name: "hero-button-component",
      data: { name: 'Go to job site' }
    }]
  }]
}
