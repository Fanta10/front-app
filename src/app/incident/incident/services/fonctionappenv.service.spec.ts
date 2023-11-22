import { TestBed } from '@angular/core/testing';

import { FonctionappenvService } from './fonctionappenv.service';

describe('FonctionappenvService', () => {
  let service: FonctionappenvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionappenvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
