import { TestBed } from '@angular/core/testing';

import { FonctionrexService } from './fonctionrex.service';

describe('FonctionrexService', () => {
  let service: FonctionrexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionrexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
