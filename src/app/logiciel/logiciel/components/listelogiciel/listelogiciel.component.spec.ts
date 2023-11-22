import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelogicielComponent } from './listelogiciel.component';

describe('ListelogicielComponent', () => {
  let component: ListelogicielComponent;
  let fixture: ComponentFixture<ListelogicielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListelogicielComponent]
    });
    fixture = TestBed.createComponent(ListelogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
