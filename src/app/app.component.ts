import { Component } from '@angular/core';
import { ComponentItem } from './component-module/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-formly';
}
