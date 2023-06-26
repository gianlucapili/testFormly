import { Component } from '@angular/core';
import { AllComponents } from 'src/app/modules/component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  components: AllComponents[] = [
    {
      "name": "rlb-card-component",
      "data": {
        "title": "Card Title",
        "text": "Some quick example text to build on the card title and make up the bulk of the card content.",
        "image": "https://via.placeholder.com/150"
      },
      "components": [
        {
          "name": "rlb-button-component",
          "data": {
            "text": "Go somewhere"
          }
        }
      ]
    },
    {
      "name": "rlb-alert-component",
      "data": {
        "text": "This is a alert message.",
        "type": "success",
        "dismissible": true
      }
    },
    {
      "name": "rlb-button-component",
      "data": {
        "text": "Notification"
      },
      "components": [
        {
          "name": "rlb-badge-component",
          "data": {
            "text": "10",
            "background": "light"
          }
        }
      ]
    },
    {
      "name": "rlb-collapse-component",
      "data": {
        "message": "This is a collapse message.",
        "button": "Toggle collapse",
        "style": "btn-outline-secondary"
      }
    },
    {
      "name": "rlb-button-component",
      "data": {
        "text": "Tooltip button",
        "tooltip": "This is a tooltip message."
      }
    },
    {
      "name": "rlb-badge-component",
      "data": {
        "text": "New",
        "type": "success",
        "badgePill": true
      }
    },
    {
      "name": "rlb-button-component",
      "data": {
        "text": "Click me",
        "disabled": true
      }
    }
  ]
}