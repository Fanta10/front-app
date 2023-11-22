import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateenvComponent } from './createenv.component';

describe('CreateenvComponent', () => {
  let component: CreateenvComponent;
  let fixture: ComponentFixture<CreateenvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateenvComponent]
    });
    fixture = TestBed.createComponent(CreateenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
