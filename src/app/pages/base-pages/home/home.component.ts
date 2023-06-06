import { Component } from '@angular/core';
import comp from '../../../components.json'
import { ComponentItem } from 'src/app/modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  components: ComponentItem[] = comp;
}
