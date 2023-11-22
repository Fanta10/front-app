import { TestBed } from '@angular/core/testing';

import { FonctionRexService } from './fonction-rex.service';

describe('FonctionRexService', () => {
  let service: FonctionRexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionRexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
