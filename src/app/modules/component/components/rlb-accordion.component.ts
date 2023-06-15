import { Component, Input, ViewChild } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentData, ComponentItem } from '../component';
import { AbstractComponent } from './core/abstract-component';
import { ComponentDirective } from './core/component-module.directive';

@Component({
  template: `
    <div ngbAccordion>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>{{data.button}}</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            {{data.body}}
            <ng-template component></ng-template>
          </div>
        </div>
      </div>
    </div>
  `
})

export class RlbAccordionComponent extends AbstractComponent implements ComponentData {
  @Input() components!: ComponentItem[];
  @ViewChild(ComponentDirective, { static: true }) component!: ComponentDirective;
  @Input() data!: any;
}
