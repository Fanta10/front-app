import { TestBed } from '@angular/core/testing';

import { FonctionLoginService } from './fonction-login.service';

describe('FonctionLoginService', () => {
  let service: FonctionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
