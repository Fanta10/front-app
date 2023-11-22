import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeenvComponent } from './listeenv.component';

describe('ListeenvComponent', () => {
  let component: ListeenvComponent;
  let fixture: ComponentFixture<ListeenvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeenvComponent]
    });
    fixture = TestBed.createComponent(ListeenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
