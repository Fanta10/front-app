import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterexComponent } from './createrex.component';

describe('CreaterexComponent', () => {
  let component: CreaterexComponent;
  let fixture: ComponentFixture<CreaterexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaterexComponent]
    });
    fixture = TestBed.createComponent(CreaterexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
