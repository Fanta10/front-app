import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrexComponent } from './editrex.component';

describe('EditrexComponent', () => {
  let component: EditrexComponent;
  let fixture: ComponentFixture<EditrexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrexComponent]
    });
    fixture = TestBed.createComponent(EditrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
