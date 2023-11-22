import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCostumerComponent } from './layout-costumer.component';

describe('LayoutCostumerComponent', () => {
  let component: LayoutCostumerComponent;
  let fixture: ComponentFixture<LayoutCostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutCostumerComponent]
    });
    fixture = TestBed.createComponent(LayoutCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
