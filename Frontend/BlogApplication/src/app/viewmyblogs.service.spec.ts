import { TestBed } from '@angular/core/testing';

import { ViewmyblogsService } from './viewmyblogs.service';

describe('ViewmyblogsService', () => {
  let service: ViewmyblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmyblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
