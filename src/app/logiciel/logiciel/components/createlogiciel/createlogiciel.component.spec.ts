import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelogicielComponent } from './createlogiciel.component';

describe('CreatelogicielComponent', () => {
  let component: CreatelogicielComponent;
  let fixture: ComponentFixture<CreatelogicielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatelogicielComponent]
    });
    fixture = TestBed.createComponent(CreatelogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
