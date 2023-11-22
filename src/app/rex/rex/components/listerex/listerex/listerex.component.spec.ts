import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerexComponent } from './listerex.component';

describe('ListerexComponent', () => {
  let component: ListerexComponent;
  let fixture: ComponentFixture<ListerexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerexComponent]
    });
    fixture = TestBed.createComponent(ListerexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
