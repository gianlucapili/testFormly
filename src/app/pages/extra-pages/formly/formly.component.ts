import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/modules/component/services/apis/apis.service';
import { ScopeManagerService } from 'src/app/modules/component/services/scope/scope-manager.service';
import { AbstractPage } from 'src/app/modules/component/components/core/abstract-page';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent extends AbstractPage implements OnInit {

  constructor(route: ActivatedRoute, apisService: ApisService, scopeAccessor: ScopeManagerService) {
    super(route, apisService, scopeAccessor);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  print() {
    this.scopeAccessor.printScope();
  }
}
