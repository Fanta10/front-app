import { TestBed } from '@angular/core/testing';

import { FonctionenvironService } from './fonctionenviron.service';

describe('FonctionenvironService', () => {
  let service: FonctionenvironService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionenvironService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
