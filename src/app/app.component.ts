import { Component } from '@angular/core';
import { ComponentItem } from './component-module/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-formly';

  components: ComponentItem[] = [
  {
    name: "rlb-card-component",
    data: { 
      title: 'Card Title', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.', 
      image: 'https://via.placeholder.com/150',
    },
    components: [{
      name: "rlb-button-component",
      data: { name: 'Share' }
    }]
  },
  {
    name: "rlb-button-component",
    data: { 
      name: 'Notification', 
      style: 'btn-success gap-1',
    },
    components: [{
      name: "rlb-badge-component",
      data: { text: '10', background: 'light', badgePill : true }
    }]
  },
  {
    name: "rlb-spinner-component",
    data: { 
      type: 'grow', 
      color: 'warning', 
      message: 'Please wait...' 
    }
  },
  // {
  //   name: "rlb-close-button-component",
  //   data: { disabled: true }
  // },
  // {
  //   name: "hero-profile-component",
  //   data: { name: 'Bombasto', bio: 'Brave as they come' }
  // },
  // {
  //   name: "hero-profile-component",
  //   data: { name: 'Dr. IQ', bio: 'Smart as they come' }
  // },
  // {
  //   name: "hero-job-ad-component",
  //   data: { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
  // },
  // {
  //   name: "rlb-accordion-component",
  //   data: { button: 'Accordion title', body: 'Submit your resume today!' }
  // },
  // {
  //   name: "rlb-collapse-component",
  //   data: { 
  //     message: 'This is a collapse message.',
  //     button: 'Toggle collapse',
  //     style: 'btn-outline-secondary'
  //   }
  // },
  // {
  //   name: "rlb-tooltip-component",
  //   data: { 
  //     button: 'Toggle tooltip',
  //     tooltip: 'This is a tooltip message.',
  //     placement: 'bottom' 
  //   }
  // },
  // {
  //   name: "rlb-badge-component",
  //   data: { text: 'New', type: 'success', badgePill : true }
  // },
  // {
  //   name: "rlb-button-component",
  //   data: { text: 'Click me', style: 'btn-primary', type: 'submit', disabled: true, autofocus: true }
  // },
  // {
  //   name: "rlb-progress-bar-component",
  //   data: { 
  //     value: 75, 
  //     text: '75%',
  //     type: 'info', 
  //     striped: true, 
  //     animated: true,
  //     height: '.8rem' 
  //   }
  // },
  // {
  //   name: "rlb-pagination-component",
  //   data: { collectionSize: 100, page: 1, maxSize: 5 }
  // },
  // {
  //   name: "rlb-alert-component",
  //   data: { type: 'success', dismissible: true, message: 'This is an alert message.' }
  // },
  // {
  //   name: "hero-job-ad-component",
  //   data: { headline: 'Openings in all departments', body: 'Apply today', },
  //   components: [{
  //     name: "hero-button-component",
  //     data: { name: 'Go to job site' }
  //   }]
  // }
]}
