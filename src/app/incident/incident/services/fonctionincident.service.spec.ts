import { TestBed } from '@angular/core/testing';

import { FonctionincidentService } from './fonctionincident.service';

describe('FonctionincidentService', () => {
  let service: FonctionincidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionincidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
