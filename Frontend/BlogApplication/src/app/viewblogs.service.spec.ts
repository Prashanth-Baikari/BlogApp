import { TestBed } from '@angular/core/testing';

import { ViewblogsService } from './viewblogs.service';

describe('ViewblogsService', () => {
  let service: ViewblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
