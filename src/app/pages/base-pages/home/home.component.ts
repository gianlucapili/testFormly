import { Component } from '@angular/core';
import { ComponentItem } from 'src/app/component-module/component';
import comp from '../../../components.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  components: ComponentItem[] = comp;
}
