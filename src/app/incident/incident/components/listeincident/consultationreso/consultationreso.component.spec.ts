import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationresoComponent } from './consultationreso.component';

describe('ConsultationresoComponent', () => {
  let component: ConsultationresoComponent;
  let fixture: ComponentFixture<ConsultationresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationresoComponent]
    });
    fixture = TestBed.createComponent(ConsultationresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
