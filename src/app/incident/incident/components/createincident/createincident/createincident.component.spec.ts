import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateincidentComponent } from './createincident.component';

describe('CreateincidentComponent', () => {
  let component: CreateincidentComponent;
  let fixture: ComponentFixture<CreateincidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateincidentComponent]
    });
    fixture = TestBed.createComponent(CreateincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
