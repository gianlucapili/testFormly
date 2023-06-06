import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/modules/router/components/abstract-page';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent extends AbstractPage implements OnInit {

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.subTitle);
    console.log(this.components);
    console.log(this.params);
  }
}
