import { TestBed } from '@angular/core/testing';

import { UserspostsService } from './usersposts.service';

describe('UserspostsService', () => {
  let service: UserspostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserspostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
