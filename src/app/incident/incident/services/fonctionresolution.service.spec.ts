import { TestBed } from '@angular/core/testing';

import { FonctionresolutionService } from './fonctionresolution.service';

describe('FonctionresolutionService', () => {
  let service: FonctionresolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionresolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
