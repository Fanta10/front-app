import { TestBed } from '@angular/core/testing';

import { FonctionlogicielService } from './fonctionlogiciel.service';

describe('FonctionlogicielService', () => {
  let service: FonctionlogicielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionlogicielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
