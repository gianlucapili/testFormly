import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExtraComponent } from './page-extra.component';

describe('PageExtraComponent', () => {
  let component: PageExtraComponent;
  let fixture: ComponentFixture<PageExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageExtraComponent]
    });
    fixture = TestBed.createComponent(PageExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
