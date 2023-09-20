import { TestBed } from '@angular/core/testing';

import { ViewCommentService } from './view-comment.service';

describe('ViewCommentService', () => {
  let service: ViewCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
