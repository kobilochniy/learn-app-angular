import { TestBed } from '@angular/core/testing';

import { UrlPrefixInterceptorService } from './url-prefix-interceptor.service';

describe('UrlPrefixInterceptorService', () => {
  let service: UrlPrefixInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlPrefixInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
